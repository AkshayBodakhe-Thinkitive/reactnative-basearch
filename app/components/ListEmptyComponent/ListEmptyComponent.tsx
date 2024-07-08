import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ImagePath} from '../../constants/ImagePaths';
import CustomText from '../Text/CustomText';
import {FontType} from '../../constants/FontType';
import { getResponsiveFontSize, getResponsiveHeight } from '../../utils/responsiveUtils';

interface Props {
    message?: string
}

const ListEmptyComponent = ({message}:Props) => {
  return (
    <View style={styles.cotainer}>
      <Image source={ImagePath.noresult} style={styles.noResultImage} />
      <CustomText
        color={'#727272'}
        fontFamily={FontType.Roboto_Medium}
        fontSize={getResponsiveFontSize(20)}>
        {message ? message : "No Data found !"}
      </CustomText>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height : '100%',
  },
  noResultImage: {
    flex : 1,
    height: getResponsiveHeight(20),
    width: '65%',
    resizeMode: 'cover',
    marginVertical: 10,
  },
});
