import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../../../constants/Colors';

const CustomOTPInput = ({ onChange }: { onChange: (otp: string) => void }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChangeText = (text: string, index: number) => {
    if (text.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    // Check if OTP is complete and call onComplete callback
    // if (newOTP.every((value) => value !== '')) {
        onChange(newOTP.join(''));
    //   }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.input}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  input: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#CCCCCC',
    textAlign: 'center',
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5, 
    backgroundColor: colors.white
  },
});

export default CustomOTPInput;
