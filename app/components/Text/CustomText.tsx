import React, {FC} from 'react';
import {Text as RNText, TextProps, StyleSheet, TextStyle} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {colors} from '../../constants/Colors';
import {FontType} from '../../constants/FontType';

const CustomText: FC<CustomTextProps> = ({
  fontSize = responsiveFontSize(1.5),
  color = colors.black,
  fontFamily = FontType.Roboto_Regular,
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
