import { Dimensions, Platform, StatusBar } from 'react-native';

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;


export const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;