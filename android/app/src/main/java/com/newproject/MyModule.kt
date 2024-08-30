package com.newproject

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MyModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MyModule"
    }

    @ReactMethod
    fun someMethod(promise: Promise) {
        // Your native code here
        promise.resolve("This is a response from Kotlin! Hello Akshay")
    }
}
