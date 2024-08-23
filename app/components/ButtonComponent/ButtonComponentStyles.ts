import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
import {FontType} from '../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const ButtonComponentStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    height: responsiveHeight(5),
  },
  btnText: {
    color: colors.white,
    fontSize: responsiveFontSize(1.8),
    marginHorizontal: responsiveWidth(2.5),
    fontFamily: FontType.Roboto_Medium,
  },
  outlinedButton: {
    backgroundColor: 'white',
  },
});
