import { useState, useEffect } from 'react';
import { NativeModules } from 'react-native';

const { CustomDeviceInfo } = NativeModules;

const useDeviceInfo = () => {
  const [deviceId, setDeviceId] = useState(null);
  const [brand, setBrand] = useState(null);
  const [systemVersion, setSystemVersion] = useState(null);
  const [appVersion, setAppVersion] = useState(null);
  const [isTablet, setIsTablet] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [storageInfo, setStorageInfo] = useState({ availableStorage: null, totalStorage: null });
  const [deviceName, setDeviceName] = useState(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const id = await CustomDeviceInfo.getDeviceId();
        setDeviceId(id);

        const deviceBrand = await CustomDeviceInfo.getBrand();
        setBrand(deviceBrand);

        const version = await CustomDeviceInfo.getSystemVersion();
        setSystemVersion(version);

        const appVer = await CustomDeviceInfo.getAppVersion();
        setAppVersion(appVer);

        const tablet = await CustomDeviceInfo.isTablet();
        setIsTablet(tablet);

        const battery = await CustomDeviceInfo.getBatteryLevel();
        setBatteryLevel(battery);

        const storage = await CustomDeviceInfo.getStorageInfo();
        setStorageInfo(storage);

        const name = await CustomDeviceInfo.getDeviceName();
        setDeviceName(name);
      } catch (error) {
        console.error('Failed to fetch device info', error);
      }
    };

    fetchDeviceInfo();
  }, []);

  return {
    deviceId,
    brand,
    systemVersion,
    appVersion,
    isTablet,
    batteryLevel,
    storageInfo,
    deviceName,
  };
};

export default useDeviceInfo;
