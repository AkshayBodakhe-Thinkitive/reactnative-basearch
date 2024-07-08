import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../constants/Colors';
import { getResponsiveFontSize, getResponsiveHeight } from '../../utils/responsiveUtils';
import { FontType } from '../../constants/FontType';
// import {FontType} from '../../constants/FontType';

interface SmallButtonProps {
  title: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  outlined?: boolean;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  outlined,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        outlined && {backgroundColor: 'transparent'},
      ]}
      onPress={onPress}>
      <Text
        style={[styles.text, outlined && {color: colors.primary},textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: getResponsiveHeight(0.6),
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
    justifyContent:'center'
  },
  text: {
    color: colors.white,
    fontFamily: FontType.Roboto_Medium,
    fontSize: getResponsiveFontSize(12)
    
  },
});

export default SmallButton;
