package com.newproject

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.modules.core.DeviceEventManagerModule

class NetworkStatusModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), LifecycleEventListener {

    private val connectivityReceiver: BroadcastReceiver

    init {
        connectivityReceiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context, intent: Intent) {
                val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
                val network = connectivityManager.activeNetwork
                val capabilities = connectivityManager.getNetworkCapabilities(network)

                val isConnected = capabilities != null &&
                        (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) ||
                                capabilities.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) ||
                                capabilities.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET))

                sendNetworkStatus(isConnected)
            }
        }
        reactContext.addLifecycleEventListener(this)
    }

    override fun getName(): String {
        return "NetworkStatus"
    }

    private fun sendNetworkStatus(isConnected: Boolean) {
        val status = if (isConnected) "ONLINE" else "OFFLINE"
        reactApplicationContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("networkStatusChanged", status)
    }

    override fun onHostResume() {
        val intentFilter = IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION)
        reactApplicationContext.registerReceiver(connectivityReceiver, intentFilter)
    }

    override fun onHostPause() {
        reactApplicationContext.unregisterReceiver(connectivityReceiver)
    }

    override fun onHostDestroy() {
        // Clean up any resources if necessary
    }
}
