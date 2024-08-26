import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AuthBackgroundImage from '../components/BackgroungImage/BackgroundImage';
import {LoginScreenStyles as styles} from '../styles/LoginScreenStyles';
import {useNavigation} from '@react-navigation/native';
import {AuthNavConstants} from '../../../constants/NavConstants';
import TextInput from '../../../components/TextInput/TextInput';
import Row from '../../../components/Row/Row';
import Button from '../../../components/ButtonComponent/ButtonComponent';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>();

  const handleBlur = (fieldName: string) => {
    if (fieldName === 'username') {
      if (!username) {
        setErrors({...errors, username: 'username is required'});
      } else {
        setErrors({...errors, username: ''});
      }
    } else if (fieldName === 'password') {
      if (!password) {
        setErrors({...errors, password: 'Password is required'});
      } else {
        setErrors({...errors, password: ''});
      }
    }
  };

  const handleChange = (fieldName: string, value: string) => {
    if (fieldName === 'username') {
      setUsername(value);
      if (errors.username) {
        setErrors({...errors, username: ''});
      }
    } else if (fieldName === 'password') {
      setPassword(value);
      if (errors.password) {
        setErrors({...errors, password: ''});
      }
    }
  };

  const handleSignIn = async () => {
    const errors: {[key: string]: string} = {};

    if (!username) {
      errors.username = 'username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      // const response = await dispatch(signInAction({username, password}));
      const respose = 'OK';
      if (!respose) {
        // handle error
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <View style={styles.container}>
      <AuthBackgroundImage />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.signInFormContainer}>
          <TouchableOpacity onLongPress={() => setModalVisible(true)}>
            <Text style={styles.signInTxt}>Sign In</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="E-mail"
            value={username}
            keyboardType="email-address"
            onChangeText={value => handleChange('username', value)}
            isValid={errors.username}
            errorText={errors.username}
            onBlur={() => handleBlur('username')}
            autoCapitalize="none"
            inputBoxStyles={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={value => handleChange('password', value)}
            onBlur={() => handleBlur('password')}
            isValid={errors.password}
            errorText={errors.password}
            secureTextEntry
            inputBoxStyles={styles.textInput}
          />
          <View style={styles.forgotPassRow}>
            <Row></Row>
            <TouchableOpacity
              onPress={() => navigation.navigate(AuthNavConstants.FORGOT_PASS)}>
              <Text style={styles.forgPassTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <Button title="Sign In" onPress={handleSignIn} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
