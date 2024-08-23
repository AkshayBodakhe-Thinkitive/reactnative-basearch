import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextStyle, TouchableOpacityProps } from 'react-native';
import { colors } from '../../constants/Colors';
import { FontType } from '../../constants/FontType';
import { responsiveFontSize } from 'react-native-responsive-dimensions';


interface TextButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: TextStyle;
}

const TextButton: React.FC<TextButtonProps> = ({ onPress, text, textStyle, ...restProps }) => {
  return (
    <TouchableOpacity onPress={onPress} {...restProps}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
     fontSize : responsiveFontSize(2),
      color: colors.primary,
      fontFamily: FontType.Roboto_Regular,
      padding : 5
  },
});

export default TextButton;
