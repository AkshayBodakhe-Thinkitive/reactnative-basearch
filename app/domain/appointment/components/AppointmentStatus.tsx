import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import CustomText from '../../../components/Text/CustomText';
import { FontType } from '../../../constants/FontType';

interface Props {
  children: ReactNode;
  color : string
}

const AppointmentStatus = ({children,color}: Props) => {
  let bg = '';
  let txtStyle = '';

  switch (children) {
    case 'Scheduled':
      bg = '#0BAD0033';
      txtStyle = '#0BAD00';
      break;

      case 'ReScheduled':
      bg = '#0BAD0033';
      txtStyle = '#0BAD00';
      break;
    
    case 'Confirmed':
      bg = '#0BAD0033';
      txtStyle = '#0BAD00';
      break;

    case 'Pending':
      bg = '#FF760033';
      txtStyle = '#FF7600';
      break;

    case 'Completed':
      bg = '#0BAD0033';
      txtStyle = '#0BAD00';
      break;

    case 'No Show':
      bg = '#FF230033';
      txtStyle = '#FF2300';
      break;

    case 'Cancelled':
      bg = '#003A7033';
      txtStyle = '#003A70';
      break;
  }

  return (
    <View style={{
      // backgroundColor: bg,
      padding:4,borderRadius:5}}>
      <CustomText fontFamily={FontType.Roboto_Medium} color={color}>{children}</CustomText>
    </View>
  );
};

export default AppointmentStatus;

const styles = StyleSheet.create({});
