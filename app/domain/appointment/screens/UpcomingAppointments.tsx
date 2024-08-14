import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../constants/Colors';
import AppointmentCard from '../components/ApoointmentCard';
import {appointmentsStaticData} from '../constants/StringConstants';

const UpcomingAppointments = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    //    fetchAppointments()
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <View>
      <FlatList
        data={appointmentsStaticData}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
          />
        }
        contentContainerStyle={AppointmentsStyles.contentContainerStyle}
        renderItem={({item}) => {
          return <AppointmentCard type="upcoming" item={item} />;
        }}
      />
    </View>
  );
};

export default UpcomingAppointments;

export const AppointmentsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 10,
    paddingBottom: 70,
  },
});
