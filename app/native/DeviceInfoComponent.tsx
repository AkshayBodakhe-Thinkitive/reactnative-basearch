import React from 'react';
import { View, Text } from 'react-native';
import useDeviceInfo from '../custom-hooks/UseDeviceInfo';

const DeviceInfoComponent = () => {
  const {
    deviceId,
    brand,
    systemVersion,
    appVersion,
    isTablet,
    batteryLevel,
    storageInfo,
    deviceName,
  } = useDeviceInfo();

  return (
    <View>
      <Text>Device ID: {deviceId}</Text>
      <Text>Brand: {brand}</Text>
      <Text>System Version: {systemVersion}</Text>
      <Text>App Version: {appVersion}</Text>
      <Text>Is Tablet: {isTablet ? 'Yes' : 'No'}</Text>
      <Text>Battery Level: {batteryLevel} %</Text>
      <Text>Available Storage: {storageInfo.availableStorage} MB</Text>
      <Text>Total Storage: {storageInfo.totalStorage} MB</Text>
      <Text>Device Name: {deviceName}</Text>
    </View>
  );
};

export default DeviceInfoComponent;
