package com.newproject

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.res.Configuration
import android.os.BatteryManager
import android.os.Build
import android.os.Environment
import android.os.StatFs
import android.provider.Settings
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule


class CustomDeviceInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private val orientationReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            val orientation = when (reactApplicationContext.resources.configuration.orientation) {
                Configuration.ORIENTATION_LANDSCAPE -> "landscape"
                Configuration.ORIENTATION_PORTRAIT -> "portrait"
                else -> "unknown"
            }
            // Emit the orientation change to JavaScript
            reactApplicationContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                    .emit("orientationChanged", orientation)
        }
    }

    @ReactMethod
    fun getCurrentOrientation(promise: Promise) {
        val orientation = when (reactApplicationContext.resources.configuration.orientation) {
            Configuration.ORIENTATION_LANDSCAPE -> "landscape"
            Configuration.ORIENTATION_PORTRAIT -> "portrait"
            else -> "unknown"
        }
        promise.resolve(orientation)
    }


    @ReactMethod
    fun startOrientationListener() {
        val filter = IntentFilter(Intent.ACTION_CONFIGURATION_CHANGED)
        reactApplicationContext.registerReceiver(orientationReceiver, filter)
    }

    @ReactMethod
    fun stopOrientationListener() {
        reactApplicationContext.unregisterReceiver(orientationReceiver)
    }

    override fun getName(): String {
        return "CustomDeviceInfo"
    }

    @ReactMethod
    fun getDeviceId(promise: Promise) {
        val deviceId = Build.MODEL
        promise.resolve(deviceId)
    }

    @ReactMethod
    fun getBrand(promise: Promise) {
        val brand = Build.BRAND
        promise.resolve(brand)
    }

    @ReactMethod
    fun getSystemVersion(promise: Promise) {
        val systemVersion = Build.VERSION.RELEASE
        promise.resolve(systemVersion)
    }

    @ReactMethod
    fun getAppVersion(promise: Promise) {
        val packageInfo = currentActivity?.packageManager?.getPackageInfo(currentActivity?.packageName ?: "", 0)
        val appVersion = packageInfo?.versionName
        promise.resolve(appVersion)
    }

    @ReactMethod
    fun isTablet(promise: Promise) {
        val isTablet = (reactApplicationContext.resources.configuration.screenLayout and Configuration.SCREENLAYOUT_SIZE_MASK) >= Configuration.SCREENLAYOUT_SIZE_LARGE
        promise.resolve(isTablet)
    }

    @ReactMethod
    fun getBatteryLevel(promise: Promise) {
        val batteryManager = reactApplicationContext.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
        val batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
        promise.resolve(batteryLevel)
    }

    @ReactMethod
    fun getStorageInfo(promise: Promise) {
        val stat = StatFs(Environment.getDataDirectory().path)
        val availableBytes = stat.availableBytes / (1024 * 1024)
        val totalBytes = stat.totalBytes / (1024 * 1024)

        val storageInfo = Arguments.createMap()
        storageInfo.putDouble("availableStorage", availableBytes.toDouble())
        storageInfo.putDouble("totalStorage", totalBytes.toDouble())

        promise.resolve(storageInfo)
    }

    @ReactMethod
    fun getDeviceName(promise: Promise) {
        val deviceName = Settings.Global.getString(reactApplicationContext.contentResolver, "device_name")
        promise.resolve(deviceName ?: "Unknown")
    }




}
