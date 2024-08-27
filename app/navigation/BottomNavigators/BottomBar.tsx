import {
  Animated,
  Image,
  ImageBackground,
  Keyboard,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {Ionicons} from '../../components/Icons/Ionicons';
import MaterialCommunityIcons from '../../components/Icons/MaterialCommunityIcons';
import {MaterialIcons} from '../../components/Icons/MaterialIcons';
import {ImagePath} from '../../constants/ImagePaths';
import {colors} from '../../constants/Colors';
import { BottomBarStyles as styles} from './BottomBarStyles';
import { FontType } from '../../constants/FontType';
import { BottomNavConstants } from '../../constants/NavConstants';
import { useAppDispatch } from '../../store/hooks';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import HomeScreen from '../../domain/home/screens/HomeScreen';
import AppointmentScreen from '../../domain/appointment/screens/AppointmentScreen';
// import HomeScreen from '../../domain/home/screens/HomeScreen';
// import AppointmentScreen from '../../domain/appointment/screens/AppointmentScreen';
// import ProfileScreen from '../../domain/profile/screens/ProfileScreen';
// import ChatScreen from '../../domain/chat/screens/ChatScreen';


const BottomBar = () => {
  const dispatch = useAppDispatch();


  const [show,setShow] = useState(false)

  const showMedicalRecordOptions = () => {
    setShow(!show)
  };

  const bottomBarRef = useRef<any>();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      bottomBarRef.current.setVisible(false)
      
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      bottomBarRef.current.setVisible(true)
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const Title = ({children}:any) => {
    return <Text style={{fontSize: 12, color: colors.black,fontFamily : FontType.Roboto_Regular}}>{children}</Text>
  }

  const _renderIcon = (routeName: any, selectedTab: any) => {

    switch (routeName) {
      case BottomNavConstants.HOME :
        return (
          <>
            <MaterialCommunityIcons
              name={'home-outline'}
              size={responsiveFontSize(3.5)}
              color={routeName === selectedTab ? 'black' : 'gray'}
            />
            <Title>home</Title>
          </>
        );

      case BottomNavConstants.APPOINTMENT:
        return (
          <>
            <MaterialCommunityIcons
              name={'calendar-outline'}
              size={responsiveFontSize(3.5)}
              color={routeName === selectedTab ? 'black' : 'gray'}
            />
            <Title>Appointment</Title>
          </>
        );
      case 'title3':
        return (
          <Ionicons
            name={''}
            size={responsiveFontSize(3.5)}
            color={routeName === selectedTab ? 'black' : 'gray'}
          />
        );
      case BottomNavConstants.PROFILE:
        return (
          <>
            <MaterialIcons
              name={'person-outline'}
              size={responsiveFontSize(3.5)}
              color={routeName === selectedTab ? 'black' : 'gray'}
            />
            <Title>My Profile</Title>
          </>
        );
      case BottomNavConstants.CHAT:
        return (
          <>
            <MaterialIcons name={'chat'}     size={responsiveFontSize(3.5)}
              color={routeName === selectedTab ? 'black' : 'gray'}/>
            <Title>Messages</Title>
          </>
        );
    }
  };

  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const renderCircle = () => (
    <Animated.View style={styles.btnCircleUp}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          showMedicalRecordOptions();
        }}>
        <ImageBackground
          source={ImagePath.group}
          style={{
            height: responsiveHeight(10),
            width: responsiveWidth(18),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {!show ? (
            <Image
              source={ImagePath.text}
              style={{height: responsiveHeight(3.5), top: -3}}
            />
          ) : (
            <Image
              source={ImagePath.cross}
              style={{height: responsiveHeight(3.5), top: -3}}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  )

  return (
    <CurvedBottomBar.Navigator
      ref={bottomBarRef}
      type="UP"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={
        Platform.OS === 'android'
        ? responsiveHeight(7.8)
        : (responsiveHeight(8.2) as any)
      }
      circleWidth={55}
      bgColor="white"
      initialRouteName={BottomNavConstants.HOME}
      borderTopLeftRight
      screenOptions={{
        headerShown: false,
      }}
      renderCircle={renderCircle}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={BottomNavConstants.HOME}
        position="LEFT"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBar.Screen
        name={BottomNavConstants.APPOINTMENT}
        component={() => <AppointmentScreen />}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="title3"
        component={() => <></>}
        position="CENTER"
      />
      <CurvedBottomBar.Screen
        name={BottomNavConstants.PROFILE}
        component={() => <ProfileScreen />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name={BottomNavConstants.CHAT}
        component={() => <ChatScreen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

export default BottomBar;





const ProfileScreen = () => {
  return (
    <View>
      <Text>BottomBar</Text>
    </View>
  )
}

const ChatScreen = () => {
  return (
    <View>
      <Text>BottomBar</Text>
    </View>
  )
}





