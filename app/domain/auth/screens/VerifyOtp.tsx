import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../components/Text/CustomText';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import CustomOTPInput from '../components/OTPInput/CustomOtpInput';
import { ForgotPasswordStyles as styles} from '../styles/ForgotPassStyles';


const VerifyOtp = ({navigation}:any) => {
  const [otp, setOtp] = useState<any>();

  return (
    <View style={styles.container}>
      <View style={styles.screenWrapper}>
        <CustomText
          fontSize={responsiveFontSize(3.5)}
          fontFamily={FontType.Roboto_Bold}>
          Verify OTP
        </CustomText>
        <CustomText style={styles.weWillSend}>
          Enter your OTP Code here
        </CustomText>
        <CustomOTPInput onChange={otp => setOtp(otp)}></CustomOTPInput>
        <Button
          disabled={otp?.length < 4}
          title="Verify OTP"
          buttonStyle={styles.veryOtpBtn}
          onPress={()=>navigation.navigate('setpass')}
        />
        <CustomText>Didn't receive otp yet?</CustomText>
        <TouchableOpacity>
          <CustomText style={styles.resendOTP}>Resend OTP</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyOtp;
