import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {FontType} from '../../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import HeaderBg from '../../../components/HeaderBg/HeaderBg';
import Header from '../../../components/Header/Header';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import { requestPermissions } from '../utils/androidpermissions';
import ProfilePictureComponent from '../../../components/ProfilePicture/ProfilePicture';
import { AppNavConstants } from '../../../constants/NavConstants';

type JoinScreenProps = {
  route: any;
  navigation: any;
};

const ReadyToJoin = ({navigation, route}: JoinScreenProps) => {
  const {params} = route;

  useEffect(()=>{
    requestPermissions()
  },[])

  const AppItem = params?.item;
  const ProviderName = `${AppItem?.Provider?.firstName} ${AppItem?.Provider?.lastName}`;

  const navigateToCall = () => {
    // navigation.navigate(AppNavConstants.CALL_SCREEN,params)
  }

  return (
    <View style={styles.container}>
      <HeaderBg style={{shadowOpacity: 0}}>
        <Header title="Appointment" leftIcon={<></>} />
      </HeaderBg>
      <View style={styles.readyToJoinContainer}>
        <Text style={styles.readyToJoinText}>Ready to Join ?</Text>
        <Text style={styles.drWaitingTxt}>
          Dr. {ProviderName} is waiting in the room!
        </Text>
        {/*  providerpic need to be updated */}
        <ProfilePictureComponent
          imageUrl={AppItem?.Provider?.profilePicture}
          firstName={AppItem?.Provider?.firstName}
          lastName={AppItem?.Provider?.lastName}
          imageContainerStyles={styles.imageContainerStyles}
          imageStyles={styles.imageStyles}
          textStyle={{fontSize:responsiveFontSize(5)}}
        />
        <View>
        </View>
        <View style={styles.btnContainer}>
          <Button title="Join Call" onPress={navigateToCall}/>
        </View>
      </View>
     <View>
     </View>
    </View>
  );
};

export default ReadyToJoin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  readyToJoinContainer: {
    top: '8%',
    alignItems: 'center',
  },
  readyToJoinText: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.8),
    marginBottom: '2%',
  },
  drWaitingTxt: {
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(2.3),
    fontWeight : '400',
    marginBottom: '2%',
  },
  imageContainerStyles: {
    borderRadius: 8,
    height: responsiveHeight(20),
    width: responsiveWidth(50),
    borderWidth: 0,
  },
  imageStyles: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    borderWidth: 0,
  },
  btnContainer : {
    // borderWidth : 1,
    width : '50%',
    marginVertical : '3%'
  }
});
