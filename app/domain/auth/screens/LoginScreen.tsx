import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AuthBackgroundImage from '../components/BackgroungImage/BackgroundImage';
import TextInput from '../../../components/TextInput/TextInput';
import {LoginScreenStyles as styles} from '../styles/LoginScreenStyles';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import Row from '../../../components/Row/Row';
import { useNavigation } from '@react-navigation/native';
import { AuthNavConstants } from '../../../constants/NavConstants';

const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>()

  const handleSubmit = () => {
    // implementation of login
     navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <AuthBackgroundImage />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.signInFormContainer}>
          <TouchableOpacity onLongPress={() => setModalVisible(true)}>
            <Text style={styles.signInTxt}>Sign In</Text>
          </TouchableOpacity>
          <TextInput placeholder='E-mail' />
          <TextInput placeholder='Password'/>
          <View style={styles.forgotPassRow}>
            <Row>
            </Row>
            <TouchableOpacity
              onPress={() => navigation.navigate(AuthNavConstants.FORGOT_PASS)}>
              <Text style={styles.forgPassTxt}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Button title='Sign In' onPress={handleSubmit}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
