import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';;
import TextInput from '../../../../components/TextInput/TextInput';
import DropdownComponent from '../../../../components/Dropdown/DropDown';
import { genderData, maritalStatusData } from '../../constants/StringConstants';
import DatePickerInput from '../../../../components/DatePicker/DatePickerInput';

const ProfileForm = ({
  editProfileData,
  validationState,
  handleChange,
}:any) => {
  return (
    <ScrollView style={styles.formContainer}>
      <View style={styles.formInnerContainer}>
        <TextInput
          label="First Name"
          placeholder="First Name"
          value={editProfileData.firstName}
          onChangeText={text => handleChange('firstName', text)}
          isValid={!validationState.firstName}
        />
        <TextInput
          label="Middle Name"
          placeholder="Middle Name"
          value={editProfileData.middleName}
          onChangeText={text => handleChange('middleName', text)}
        />
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          value={editProfileData.lastName}
          onChangeText={text => handleChange('lastName', text)}
          isValid={!validationState.lastName}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          value={editProfileData.email}
          onChangeText={text => handleChange('email', text)}
          isValid={!validationState.email}
          editable={false}
        />
        <DropdownComponent
          data={genderData}
          label="Gender"
          selectedValue={editProfileData.gender}
          onValueChange={(value:any) => handleChange('gender', value)}
          style={{marginBottom: '3%'}}
        />
        <DatePickerInput
          label="Date of Birth"
          date={new Date(editProfileData.dob)}
          setDate={date => handleChange('dob', date)}
          containerStyles={{marginBottom: '3%'}}
        />
        <TextInput
          label="Mobile Number"
          placeholder="Mobile Number"
          value={String(editProfileData.mobileNumber)}
          onChangeText={text => handleChange('mobileNumber', Number(text))}
          keyboardType="numeric"
          isValid={!validationState.mobileNumber}
          editable={false}
        />
        <TextInput
          placeholder="Phone Number"
          label="Phone Number"
          value={String(editProfileData.homeNumber)}
          onChangeText={text => handleChange('homeNumber', Number(text))}
          keyboardType="numeric"
        />
        <DropdownComponent
          label="Marital Status"
          placeholder='Marital Status'
          data={maritalStatusData}
          selectedValue={editProfileData.maritalStatus}
          onValueChange={(value:any) => handleChange('maritalStatus', value)}
        />
        <TextInput
          label="Aadhar ID"
          placeholder="Aadhar"
          value={String(editProfileData.aadhar)}
          onChangeText={text => handleChange('aadhar', Number(text))}
          keyboardType="numeric"
          isValid={!validationState.aadhar}
          editable={false}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileForm;


const styles = StyleSheet.create({
    formContainer: {
        padding: '1%',
        marginBottom: 10,
      },
      formInnerContainer: {
        borderWidth: 0,
        padding: '1%',
      },
})
