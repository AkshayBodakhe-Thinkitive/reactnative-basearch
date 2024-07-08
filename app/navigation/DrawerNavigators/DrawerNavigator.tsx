import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import BottomBar from '../BottomNavigators/BottomBar';
import {Ionicons} from '../../components/Icons/Ionicons';
import MaterialCommunityIcons from '../../components/Icons/MaterialCommunityIcons';
import LogoutModal from '../../domain/auth/components/LogoutModal/LogoutModal';
import {MaterialIcons} from '../../components/Icons/MaterialIcons';
import {BottomNavConstants} from '../../constants/NavConstants';
import {colors} from '../../constants/Colors';
import {getResponsiveFontSize} from '../../utils/responsiveUtils';
import CustomDrawerItem from './CustomDrawerItem';
import ProfilePictureComponent from '../../components/ProfilePicture/ProfilePicture';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const logoutFun = () => {
    // Handle logout functionality
    setShowLogoutModal(false);
  };

  const patientData = {
    firstName : 'Akshay',
    lastName : 'Bodakhe'
  }

  const CustomDrawerContent = (props: any) => {
    const drawerItems : any = [
      {
        label: 'Home',
        icon: (
          <MaterialCommunityIcons
            name={'home-outline'}
            size={21}
            color={colors.grey66}
          />
        ),
        onPress: () => props.navigation.navigate(BottomNavConstants.HOME),
      },
      {
        label: 'Provider',
        icon: (
          <Ionicons name={'person-outline'} size={21} color={colors.grey66} />
        ),
        // onPress: () => props.navigation.navigate(AppNavConstants.PROVIDER_LIST),
      },
      {
        label: 'Appointment',
        icon: (
          <MaterialCommunityIcons
            name={'calendar-outline'}
            size={21}
            color={colors.grey66}
          />
        ),
        onPress: () =>
          props.navigation.navigate(BottomNavConstants.APPOINTMENT),
      },
      {
        label: 'Bill & Payment',
        icon: (
          <MaterialIcons name={'payment'} size={21} color={colors.grey66} />
        ),
        onPress: () => props.navigation.navigate(BottomNavConstants.CHAT),
      },
    ];

    return (
      <DrawerContentScrollView {...props} style={{height: 100}}>
         <View>
          <TouchableOpacity
            style={styles.drawerItemWrapper}
            onPress={() =>
              props.navigation.navigate(BottomNavConstants.PROFILE)
            }>
            <ProfilePictureComponent
              imageUrl={'https://reactnative.dev/img/tiny_logo.png'}
              firstName={patientData?.firstName}
              lastName={patientData.lastName}
              imageContainerStyles={{height: 50, width: 50, borderRadius: 25}}
            />
            <View>
              <Text style={styles.drawerItemTextWrapper}>
                {patientData?.firstName && patientData?.lastName
                  ? `${patientData.firstName} ${patientData.lastName}`
                  : ''}
              </Text>
              <Text style={styles.drawerItemSubText}>View profile</Text>
            </View>
            <View style={{marginLeft: '15%'}}>
              <MaterialIcons
                name="arrow-forward-ios"
                size={21}
                color={colors.grey66}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.drawerItemContainer} />
        </View>

        {drawerItems.map((item:any, index:any) => (
          <CustomDrawerItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={item.onPress}
          />
        ))}
        <View style={styles.drawerItemContainer} />
        <View>
          <CustomDrawerItem
            label="Log Out"
            icon={<MaterialIcons name={'logout'} size={21} color={colors.grey66} />}
            onPress={() => setShowLogoutModal(!showLogoutModal)}
          />
          <CustomDrawerItem
            label="Settings"
            icon={<Ionicons name="settings-outline" color={colors.grey66} size={getResponsiveFontSize(20)} />}
            onPress={() => {
              // navigation.navigate(AppNavConstants.SETTINGS);
            }}
          />
          <LogoutModal
            show={showLogoutModal}
            setShow={setShowLogoutModal}
            onLogout={logoutFun}
          />
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomeSc"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeSc"
        component={BottomBar}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerItemContainer: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.grey66,
  },
  drawerItemWrapper: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerItemTextWrapper: {
    paddingLeft: 15,
    fontWeight: 'bold',
    color: colors.black,
  },
  drawerItemSubText: {
    color: '#0097F0',
    paddingLeft: 15,
    paddingTop: 5,
    fontWeight: 'bold',
  },
});
