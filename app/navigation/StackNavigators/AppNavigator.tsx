import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from '../../domain/auth/screens/Splashscreen';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from '../DrawerNavigators/DrawerNavigator';
import ProvidersListScreen from '../../domain/home/screens/ProvidersListScreen';
import { AppNavConstants } from '../../constants/NavConstants';
// import DrawerNavigator from '../DrawerNavigators/DrawerNavigator';
// import ProvidersListScreen from '../../domain/home/screens/ProvidersListScreen';
// import { AppNavConstants } from '../../constants/NavConstants';
// import ReadyToJoin from '../../domain/zoom/screens/ReadyToJoin';
// import { CallScreen } from '../../domain/zoom/screens/CallScreen';
// import EditProfileScreen from '../../domain/profile/screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={Splashscreen} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen
          name={AppNavConstants.PROVIDER_LIST}
          component={ProvidersListScreen}
          options={{animation: 'none'}}
        />
        {/*    <Stack.Screen
          name={AppNavConstants.READY_TO_JOIN}
          component={ReadyToJoin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppNavConstants.CALL_SCREEN}
          component={CallScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppNavConstants.EDIT_PROF}
          component={EditProfileScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})