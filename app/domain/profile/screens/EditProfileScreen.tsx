import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../constants/Colors';
import HeaderBg from '../../../components/HeaderBg/HeaderBg';
import Header from '../../../components/Header/Header';
import ProfileImage from '../components/ProfileImageEdit/ProfileImageEdit';
import {useNavigation} from '@react-navigation/native';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import { requestCameraPermissions } from '../../../utils/androidpermissions';

const staticEditProfileData = {
  firstName: 'John',
  middleName: 'A',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  gender: 'Male',
  dob: '1985-05-15',
  mobileNumber: '1234567890',
  homeNumber: '0987654321',
  maritalStatus: 'single',
  aadhar: '123456789012',
  profilePicture: 'https://reactnative.dev/img/tiny_logo.png',
};

const staticValidationState = {
  firstName: true,
  lastName: true,
  email: true,
  mobileNumber: true,
  aadhar: true,
};

const EditProfileScreen = () => {
  const navigation = useNavigation<any>();
  const [editProfileData, setEditProfileData] = useState(staticEditProfileData);
  const [validationState, setValidationState] = useState(staticValidationState);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (key: string, value: any) => {
    setEditProfileData((prevData: any) => ({...prevData, [key]: value}));
  };
  
  useEffect(()=>{
    requestCameraPermissions()
  },[])

  return (
    <View style={styles.container}>
      <HeaderBg>
        <Header title="Edit Profile" leftIcon={<></>} />
        <View style={{alignSelf: 'center'}}>
          <ProfileImage
            imageUri={'https://reactnative.dev/img/tiny_logo.png'}
            onImageChange={(base64String: any) =>
              handleChange('image', base64String)
            }
          />
        </View>
      </HeaderBg>
      <View style={styles.patDetailsContainer}>
        <Text>{`${editProfileData.firstName} ${editProfileData.lastName}`}</Text>
      </View>

      <ProfileForm
        editProfileData={editProfileData}
        validationState={validationState}
        handleChange={handleChange}
      />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    paddingBottom: 18,
    backgroundColor: colors.white,
  },
  patDetailsContainer: {
    zIndex: -1,
    height: '10%',
    alignItems: 'center',
    paddingTop: '15%',
  },
});
