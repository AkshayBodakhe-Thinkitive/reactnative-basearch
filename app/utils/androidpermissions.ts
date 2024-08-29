import { PermissionsAndroid } from 'react-native';

export async function requestCameraPermissions() {
  try {
    const cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;

    const cameraGranted = await PermissionsAndroid.request(
      cameraPermission,
      {
        title: 'Camera Permission',
        message: 'App needs access to your camera.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (cameraGranted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera and audio permissions granted');
    } else {
      console.log('Camera or audio permissions denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
