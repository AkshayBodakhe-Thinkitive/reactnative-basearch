import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/Colors';
import HeaderBg from '../../../components/HeaderBg/HeaderBg';
import Header from '../../../components/Header/Header';
import {AppointmentTobTabOptions} from '../constants/StringConstants';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import UpcomingAppointments from './UpcomingAppointments';
import CustomTopTab from '../../../navigation/TopTabNavigators/CustomTopTab';

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBg containerStyles={{height: responsiveHeight(13)}}>
        <Header title="Appointments"></Header>
      </HeaderBg>
      <CustomTopTab tabs={AppointmentTobTabOptions} />
      {/* {show && <MedicalRecordsMenu />} */}
      {/* {loading && <Loader />} */}
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
