import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {NativeModules, DeviceEventEmitter} from 'react-native';
import useOrientation from '../custom-hooks/UseOrientation';
import DeviceInfoComponent from './DeviceInfoComponent';
const {MyModule} = NativeModules;

const AppNative = () => {
  const [res, setRes] = useState('');
  MyModule.someMethod().then((response: any) => {
    // setRes(response)
  });

  DeviceEventEmitter.addListener('networkStatusChanged', status => {
    console.log('Network Status: ', status); // Will log ONLINE or OFFLINE
    setRes(status);
  });


  const orientation = useOrientation();

  return (
    <View>
      <Text>AppNative</Text>
      <Text>Network Status: {res}</Text>

      <Text>The current orientation is: {orientation}</Text>
      {orientation === 'portrait' ? (
        <Text>Portrait mode</Text>
      ) : orientation === 'landscape' ? (
        <Text>Landscape mode</Text>
      ) : (
        <Text>Unknown orientation</Text>
      )}

      <DeviceInfoComponent/>
    </View>
  );
};

export default AppNative;

const styles = StyleSheet.create({});
