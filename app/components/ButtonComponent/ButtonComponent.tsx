import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ButtonComponentStyles as styles} from './ButtonComponentStyles';
import {colors} from '../../constants/Colors';

const Button = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled,
  outlined,
  loading
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonStyle,
        disabled && {backgroundColor: '#ACB4BD', borderWidth: 0},
        outlined ? styles.outlinedButton : null,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator
          color={outlined ? colors.primary : colors.white}></ActivityIndicator>
      ) : (
        <Text
          style={[
            styles.btnText,
            textStyle,
            outlined && {color: colors.primary},
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

interface Props {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  outlined?: boolean;
  loading?:boolean
}
