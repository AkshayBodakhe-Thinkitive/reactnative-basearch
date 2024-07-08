import React, {FC} from 'react';
import {Text as RNText, TextProps, StyleSheet, TextStyle} from 'react-native';
import {colors} from '../../constants/Colors';
import {FontType} from '../../constants/FontType';
import { getResponsiveFontSize } from '../../utils/responsiveUtils';

const CustomText: FC<CustomTextProps> = ({
  fontSize = getResponsiveFontSize(13),
  color = colors.black,
  fontFamily = '',
  style,
  ...rest
}) => {
  const textStyles: TextStyle = StyleSheet.flatten([
    {fontSize, color, fontFamily},
    style,
  ]);

  return <RNText {...rest} style={textStyles} />;
};

export default CustomText;

interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
}
