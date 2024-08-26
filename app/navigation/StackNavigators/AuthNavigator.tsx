import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthNavConstants } from '../../constants/NavConstants';
import LoginScreen from '../../domain/auth/screens/LoginScreen';
import ForgotPasswordScreen from '../../domain/auth/screens/ForgotPasswordScreen';
import VerifyOtp from '../../domain/auth/screens/VerifyOtp';
import SetNewPassword from '../../domain/auth/screens/SetNewPassword';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AuthNavConstants.LOGIN_SCREEN}
        options={{headerShown: false}}
        component={LoginScreen}
      />
        <Stack.Screen
          name={AuthNavConstants.FORGOT_PASS}
          options={{headerShown: false}}
          component={ForgotPasswordScreen}
        />
         <Stack.Screen
          name={AuthNavConstants.VERIFY_OTP}
          options={{headerShown: false}}
          component={VerifyOtp}
        />
         <Stack.Screen
          name={AuthNavConstants.SET_PASS}
          options={{headerShown: false}}
          component={SetNewPassword}
        />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
