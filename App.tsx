import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './app/navigation/StackNavigators/AppNavigator'
import { ZoomVideoSdkProvider } from '@zoom/react-native-videosdk'
import AppNative from './app/native/AppNative'

const App = () => {
  return (
    <View style={styles.container}>
      <ZoomVideoSdkProvider
          config={{
            appGroupId: 'group.test.sdk',
            domain: 'zoom.us',
            enableLog: true,
          }}>
      <AppNavigator/>
      {/* <AppNative/> */}
      </ZoomVideoSdkProvider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})