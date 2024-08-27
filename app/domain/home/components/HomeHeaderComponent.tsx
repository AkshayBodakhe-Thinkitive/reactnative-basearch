import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {MaterialIcons} from '../../../components/Icons/MaterialIcons';
import ProfilePictureComponent from '../../../components/ProfilePicture/ProfilePicture';
import CustomText from '../../../components/Text/CustomText';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {ImagePath} from '../../../constants/ImagePaths';
import { colors } from '../../../constants/Colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


interface HeaderProps {
  patientData: any
}

const HomeHeader: React.FC<HeaderProps> = ({patientData}) => {
  const navigation = useNavigation<any>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const [showNotification, setShowNotification] = useState(false);

  const notificationCount = 1

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={openDrawer}>
            <ProfilePictureComponent
              imageUrl={'https://reactnative.dev/img/tiny_logo.png'}
              firstName={patientData?.firstName}
              lastName={patientData?.lastName}
            />
          </TouchableOpacity>
          <View>
            <CustomText color="#00000066">Your Location</CustomText>
            <CustomText>{patientData.address.addressLine1}</CustomText>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => setShowNotification(true)}>
            <ImageBackground source={ImagePath.bellBg} style={styles.bellBg}>
              <MaterialIcons
                color="black"
                name="notifications-none"
                size={responsiveFontSize(2.5)}
              />
              {notificationCount > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>
                    {notificationCount}
                  </Text>
                </View>
              )}
            </ImageBackground>
             {/* <NotificationSideModal
              visible={showNofication}
              setVisible={setShowNotification}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
    headerContainer : {
        height: responsiveHeight(7),
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexDirection: 'row',
        padding: '1%',
        paddingHorizontal: '2%',
        alignItems: 'center',
        shadowColor: '#00000099',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        backgroundColor: colors.white,
        shadowOpacity: 0.2,
        elevation: 5,
        justifyContent: "space-between",
    },
    bellBg: {
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        width: responsiveWidth(12),
    },
    notificationBadge: {
        position: 'absolute',
        top: 5,
        right: 3,
        backgroundColor: 'red',
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
      notificationText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      },
})
