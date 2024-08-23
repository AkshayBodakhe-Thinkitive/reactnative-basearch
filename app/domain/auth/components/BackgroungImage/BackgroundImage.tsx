import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {ImagePath} from '../../../../constants/ImagePaths';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const AuthBackgroundImage = () => {
  return (
    <View style={styles.imageBgContainer}>
      <ImageBackground
        source={ImagePath.backgroundLoginImage}
        resizeMode="cover"
        style={styles.image1}>
        <View style={styles.greetContainer}>
          <View style={styles.greetTxtContainer}>
            <Text style={styles.welcomeTxt}>Welcome to</Text>
            <Text style={styles.welcomeTxt}>customEHR</Text>
          </View>
          <View>
            <ImageBackground
              style={styles.image2}
              source={ImagePath.doctorImage}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBgContainer: {
    height: responsiveHeight(38),
  },
  image1: {
    flex: 1,
    justifyContent: 'center',
  },
  image2: {
    top: responsiveHeight(11),
    right: responsiveWidth(3),
    width: responsiveWidth(42),
    height: responsiveHeight(27),
  },
  greetContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  greetTxtContainer: {
    width: '60%',
  },
  welcomeTxt: {
    color: 'white',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    top: responsiveHeight(9.85),
    textAlign: 'center',
  },
});

export default AuthBackgroundImage;
