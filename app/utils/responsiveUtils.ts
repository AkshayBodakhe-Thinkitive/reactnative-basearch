
import { Dimensions } from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');


const getResponsiveWidth = (value:number) => (width / 100) * value;

const getResponsiveHeight = (value:number) => (height / 100) * value;

const getResponsiveFontSize = (value:number) => (value / fontScale);

export { getResponsiveWidth, getResponsiveHeight, getResponsiveFontSize };
