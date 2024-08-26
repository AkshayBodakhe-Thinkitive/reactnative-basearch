import {
  Text,
  TextInput as RnTextInput,
  View,
  ViewStyle,
  TouchableOpacity,
  KeyboardType,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
} from 'react-native';
import React, {ReactNode, useState, forwardRef} from 'react';
import {TextInputStyles as styles} from './TextInputStyles';
import {colors} from '../../constants/Colors';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {Ionicons} from '../Icons/Ionicons';

const TextInput = forwardRef(
  (
    {
      label,
      placeholder,
      onChangeText,
      secureTextEntry,
      rightIcon,
      leftIcon,
      style,
      value,
      editable,
      keyboardType,
      isValid,
      errorText,
      onFocus,
      onBlur,
      autoCapitalize,
      inputBoxStyles,
    }: TextInputProps,
    ref: any,
  ) => {
    const [showPass, setShowPass] = useState(true);
    const [text, setText] = useState('');

    const onChangeTxt = (val: string) => {
      onChangeText && onChangeText(val);
      setText(val);
    };
    return (
      <View style={[styles.container, style]}>
        {label && <Text style={styles.labelStyles}>{label}</Text>}
        <View
          style={[
            styles.inputContainer,
            isValid && {
              borderColor: colors.red300,
              borderWidth: 0.5,
              marginBottom: 0,
            },
            // editable === false && {backgroundColor : colors.grey2E},
            inputBoxStyles,
          ]}>
          <RnTextInput
            ref={ref}
            cursorColor={'grey'}
            style={[
              styles.inputBox,
              leftIcon ? {marginLeft: responsiveWidth(8)} : null,
            ]}
            editable={editable}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.grey66}
            onChangeText={onChangeTxt}
            secureTextEntry={secureTextEntry ? showPass : false}
            keyboardType={keyboardType}
            onBlur={onBlur}
            onFocus={onFocus}
            autoCapitalize={autoCapitalize}
          />
          <View style={{position: 'absolute', right: 7}}>
            {rightIcon && rightIcon}
          </View>
          <View style={{position: 'absolute', left: 7}}>
            {leftIcon && leftIcon}
          </View>
        </View>
        {isValid && errorText && (
          <Text style={styles.errorText}>{errorText}</Text>
        )}
        {secureTextEntry === true && text.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setShowPass(!showPass);
            }}
            style={styles.eye}>
            <Ionicons
              name={showPass ? 'eye-off' : 'eye'}
              color={'#0097F0'}
              size={24}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default TextInput;

export interface TextInputProps {
  ref?: any;
  label?: string;
  value?: string | any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  inputBoxStyles?: StyleProp<ViewStyle>;
  editable?: boolean;
  keyboardType?: KeyboardType;
  isValid?: boolean | any;
  errorText?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}
