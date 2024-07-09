import {FlatList, View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/Text/CustomText';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {PersonalDetailStyles as styles} from '../styles/PersonalDetailsStyles'
import { PatientProfileData, personalDetailsFields } from '../constants/StringConstants';

const PersonalDetailTabScreen = () => {
  
  const patientData = PatientProfileData

  const getNestedProperty = (obj: any, keys: any) => {
    return keys
      .split('.')
      .reduce(
        (acc: any, key: any) =>
          acc && acc[key] !== 'undefined' ? acc[key] : undefined,
        obj,
      );
  };

  const personalDetails = personalDetailsFields.map(field => {
    const desc = field.formatter
      ? field.formatter(getNestedProperty(patientData, field.key))
      : getNestedProperty(patientData, field.key);
    return {title: field.title, desc};
  });

  return (
    <View style={styles.personalDetailscontainer}>
      <FlatList
        data={personalDetails}
        contentContainerStyle={{padding: '2%'}}
        renderItem={({item}) => {
          return (
            <View style={styles.borderBottom}>
              <CustomText
                style={{marginVertical: 12}}
                color="#1A1A1A66"
                fontSize={responsiveFontSize(2)}>
                {item.title}
              </CustomText>
              <CustomText
                style={{marginBottom: 18}}
                fontSize={responsiveFontSize(2)}>
                {typeof item.desc === 'string' && item.desc
                  ? item.desc.charAt(0).toUpperCase() + item.desc.slice(1)
                  : item.desc}
              </CustomText>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PersonalDetailTabScreen;
