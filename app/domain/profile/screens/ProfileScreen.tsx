import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {ProfileScreenStyles as styles} from '../styles/ProfileScreenStyles';
import HeaderBg from '../../../components/HeaderBg/HeaderBg';
import Header from '../../../components/Header/Header';
import ProfilePictureComponent from '../../../components/ProfilePicture/ProfilePicture';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { PatientProfileData } from '../constants/StringConstants';
import CustomText from '../../../components/Text/CustomText';
import { FontType } from '../../../constants/FontType';
import { EvilIcons } from '../../../components/Icons/EvilIcons';
import ProfileTabNavigator from '../../../navigation/TopTabNavigators/ProfileTabNavigator';

const ProfileScreen = () => {

    const patientData = PatientProfileData

  return (
    <View style={styles.container}>
       <HeaderBg>
        <Header
          title="My Profile"
          leftIcon={<></>}></Header>
        <View style={{alignSelf: 'center'}}>
          <ProfilePictureComponent
            imageUrl={patientData.profilePicture}
            firstName={patientData?.firstName}
            lastName={patientData?.lastName}
            imageContainerStyles={styles.imageContainer}
            imageStyles={{
              height: '100%',
              width: '100%',
              borderRadius: responsiveHeight(10),
            }}
          />
        </View>
      </HeaderBg>
      <View style={styles.patDetailsContainer}>
        <CustomText
          fontSize={responsiveFontSize(2)}
          fontFamily={FontType.Roboto_Medium}>
          {patientData?.firstName && patientData?.lastName
            ? `${patientData.firstName} ${patientData.lastName}`
            : ''}
        </CustomText>
        <TouchableOpacity
          style={{flexDirection: 'row',alignItems:"center",}}
        //   onPress={() => navigation.navigate(AppNavConstants.EDIT_PROF)}
          >
          <EvilIcons name="pencil" size={responsiveFontSize(2)} style={styles.pencil} />
          <CustomText style={styles.editProfileText}>Edit Profile</CustomText>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ProfileTabNavigator />
      </View>
    </View>
  )
}

export default ProfileScreen

