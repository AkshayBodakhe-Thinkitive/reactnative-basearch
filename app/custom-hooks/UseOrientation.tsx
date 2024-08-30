import { useState, useEffect } from 'react';
import { NativeModules, NativeEventEmitter, Dimensions } from 'react-native';

const { CustomDeviceInfo } = NativeModules;
const deviceInfoEmitter = new NativeEventEmitter(CustomDeviceInfo);

const getInitialOrientation = () => {
  const { height, width } = Dimensions.get('window');
  return height >= width ? 'portrait' : 'landscape';
};

const useOrientation = () => {
  const [orientation, setOrientation] = useState(getInitialOrientation());

  useEffect(() => {
    const handleOrientationChange = (newOrientation:any) => {
      setOrientation(newOrientation);
    };

    // Start listening to orientation changes
    CustomDeviceInfo.startOrientationListener();

    // Subscribe to the orientation change event
    const subscription = deviceInfoEmitter.addListener('orientationChanged', handleOrientationChange);

    // Clean up the listener when the component unmounts
    return () => {
      CustomDeviceInfo.stopOrientationListener();
      subscription.remove();
    };
  }, []);

  return orientation;
};

export default useOrientation;
