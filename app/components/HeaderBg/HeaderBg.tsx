import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../../constants/ImagePaths'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { statusBarHeight } from '../../utils/DimensionUtils'

interface Props {
  children?: any,
  style?: any,
  containerStyles?:any
}

const HeaderBg = ({children,style,containerStyles}:Props) => {
  return (
    <View style={[{height: responsiveHeight(18)},containerStyles]}>
    <ImageBackground
      source={ImagePath.gradientBg}
      resizeMode="cover"
      style={[styles.imgBg,style]}>
      <SafeAreaView style={styles.safeArea}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  </View>
  )
}

export default HeaderBg

const styles = StyleSheet.create({
    imgBg : {
        width: '110%',
        height: '100%',
        left: -20,
        position: 'absolute',
        shadowOpacity:0.5
      },
      safeArea : {
        height: '100%', 
        width: '90%', 
        alignSelf: 'center',
        marginTop: statusBarHeight
      },
     
})