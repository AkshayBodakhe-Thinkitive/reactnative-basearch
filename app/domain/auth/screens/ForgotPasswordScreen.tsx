import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {RootState} from '../../../store/storeConfig';
import {ForgotPasswordStyles as styles} from '../styles/ForgotPassStyles';
import CustomText from '../../../components/Text/CustomText';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import Row from '../../../components/Row/Row';
import { AntIcons } from '../../../components/Icons/AntIcons';
import { colors } from '../../../constants/Colors';
import TextButton from '../../../components/TextButton/TextButton';
import { useNavigation } from '@react-navigation/native';
import { AuthNavConstants } from '../../../constants/NavConstants';
import Loader from '../../../components/Loader/Loader';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const dispatch = useAppDispatch();

  const navigation = useNavigation<any>()

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const sendLink = () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }
    handleSubmit();
  };


  const handleSubmit = async () => {
    // implement forgot password functionality here and on sucess navigate to verifyotp or show error
     navigation.navigate(AuthNavConstants.VERIFY_OTP)
  };

  const loading = useAppSelector((state: RootState) => state.auth?.loading);

  return (
    <View style={styles.container}>
      <View style={styles.screenWrapper}>
        <CustomText fontSize={responsiveFontSize(3.5)}>Forgot Password?</CustomText>
        <CustomText style={styles.weWillSend}>
          We will send you an OTP on your email
        </CustomText>
        <TextInput
          placeholder="E-mail"
          style={styles.textInput}
          value={email}
          onChangeText={handleEmailChange}
          isValid={emailError}
          onBlur={() => setEmailError(email ? '' : 'Email is required')}
          errorText={emailError}
          autoCapitalize="none"
        />
        <Button
          title="Send OTP"
          buttonStyle={{width: '100%'}}
          onPress={sendLink}
        />
        <Row style={{marginTop: '4%'}}>
          <AntIcons
            name="arrowleft"
            color={colors.primary}
            size={responsiveFontSize(2)}
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

export default ForgotPasswordScreen;
