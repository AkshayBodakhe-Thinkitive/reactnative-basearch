import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './app/navigation/StackNavigators/AppNavigator';
import {ZoomVideoSdkProvider} from '@zoom/react-native-videosdk';
import AppNative from './app/native/AppNative';
import Native from './app/Native';
import React from 'react';


const App = () => {
  return (
    <View style={styles.container}>
      {/* <ZoomVideoSdkProvider
        config={{
          appGroupId: 'group.test.sdk',
          domain: 'zoom.us',
          enableLog: true,
        }}>
        <AppNavigator />
      </ZoomVideoSdkProvider> */}
      {/* <AppNative/> */}
      <Native />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
