import {View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../components/Text/CustomText';
import {FontType} from '../../../constants/FontType';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import Row from '../../../components/Row/Row';
import {AntIcons} from '../../../components/Icons/AntIcons';
import TextButton from '../../../components/TextButton/TextButton';
import {colors} from '../../../constants/Colors';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/storeConfig';
import { ForgotPasswordStyles as styles } from '../styles/ForgotPassStyles';
import { getResponsiveFontSize, getResponsiveHeight } from '../../../utils/responsiveUtils';
import Loader from '../../../components/Loader/Loader';

const SetNewPassword = ({navigation, route}: any) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const dispatch = useAppDispatch();

  const loading = useAppSelector((state: RootState) => state.auth?.loading);

  // const {email} = route.params;


  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'currentPassword':
      case 'newPassword': 
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters long';
        if (!/(?=.*[a-z])/.test(value)) return 'Password must contain at least one lowercase letter';
        if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain at least one uppercase letter';
        if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one digit';
        if (!/(?=.*[!@#$%^&*])/.test(value)) return 'Password must contain at least one special character';
        return '';
      case 'confirmPassword':
        return value ? (value === newPassword ? '' : 'Passwords do not match') : 'Confirm Password is required';
      default:
        return '';
    }
  };

  const handleBlur = (fieldName: string) => {
    const errorMessage = validateField(
      fieldName,
      fieldName === 'confirmPassword'
        ? confirmPassword
        : fieldName === 'newPassword'
        ? newPassword
        : currentPassword,
    );
    setErrors({...errors, [fieldName]: errorMessage});
  };

  const handleInputChange = (fieldName:string, text:string) => {
    switch (fieldName) {
      case 'currentPassword':
        setCurrentPassword(text);
        setErrors((prevErrors) => ({
          ...prevErrors,
          currentPassword: validateField(fieldName, text),
        }));
        break;
      case 'newPassword':
        setNewPassword(text);
        setErrors((prevErrors) => ({
          ...prevErrors,
          newPassword: validateField(fieldName, text),
        }));
        break;
      case 'confirmPassword':
        setConfirmPassword(text);
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: validateField(fieldName, text),
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const currentPasswordError = validateField('currentPassword', currentPassword);
    const newPasswordError = validateField('newPassword', newPassword);
    const confirmPasswordError = validateField('confirmPassword', confirmPassword);
  
    setErrors({
      currentPassword: currentPasswordError,
      newPassword: newPasswordError,
      confirmPassword: confirmPasswordError,
    });
  
    if (!currentPasswordError && !newPasswordError && !confirmPasswordError) {
      const passwordData = {
        // email: email,
        oldPassword: btoa(currentPassword),
        newPassword: btoa(newPassword),
        confirmNewPassword: btoa(confirmPassword),
      }; 
      // const res = await dispatch(changePasswordAction(passwordData));
      // const status = res?.payload?.status;
       const status = true
      if (status === true) {
        navigation.replace('Main');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenWrapper}>
        <CustomText
          fontSize={getResponsiveFontSize(16)}
          fontFamily={FontType.Roboto_Bold}>
          Set New Password
        </CustomText>
        <TextInput
          placeholder="Current Password"
          style={[styles.textInput, {marginBottom: getResponsiveHeight(0)}]}
          value={currentPassword}
          onChangeText={(text) => handleInputChange('currentPassword', text)}
          isValid={errors.currentPassword}
          onBlur={() => handleBlur('currentPassword')}
          errorText={errors.currentPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="New Password"
          style={[styles.textInput, {marginBottom: getResponsiveHeight(0)}]}
          value={newPassword}
          onChangeText={(text) => handleInputChange('newPassword', text)}
          isValid={errors.newPassword}
          onBlur={() => handleBlur('newPassword')}
          errorText={errors.newPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.textInput}
          value={confirmPassword}
          onChangeText={(text) => handleInputChange('confirmPassword', text)}
          isValid={errors.confirmPassword}
          onBlur={() => handleBlur('confirmPassword')}
          errorText={errors.confirmPassword}
          secureTextEntry
        />
        <Button
          title="Set Password"
          buttonStyle={{width: '100%'}}
          onPress={handleSubmit}
        />
        <Row style={{marginTop: '4%'}}>
          <AntIcons
            name="arrowleft"
            color={colors.primary}
            size={getResponsiveFontSize(2)}
          />
          <TextButton
            text="Go Back"
            onPress={() => navigation.goBack()}></TextButton>
        </Row>
      </View>
      {loading && <Loader />}
    </View>
  );
};

export default SetNewPassword;
