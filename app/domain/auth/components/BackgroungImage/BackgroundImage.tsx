import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {ImagePath} from '../../../../constants/ImagePaths';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../../utils/responsiveUtils';

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
            <Text style={styles.welcomeTxt}>ThinkEMR</Text>
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
    height: getResponsiveHeight(38),
  },
  image1: {
    flex: 1,
    justifyContent: 'center',
  },
  image2: {
    top: getResponsiveHeight(11),
    right: getResponsiveWidth(3),
    width: getResponsiveWidth(42),
    height: getResponsiveHeight(27),
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
    fontSize: getResponsiveFontSize(20),
    fontWeight: 'bold',
    top: getResponsiveHeight(9.85),
    textAlign: 'center',
  },
});

export default AuthBackgroundImage;
