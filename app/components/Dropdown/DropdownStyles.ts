import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { colors } from "../../constants/Colors";
import { FontType } from "../../constants/FontType";



export const DropdownStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor:colors.white,
    borderRadius: 6,
    paddingHorizontal: 8,
    height: responsiveHeight(4.5),
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: FontType.Roboto_Medium,
    color : colors.grey
  },
  selectedTextStyle: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: FontType.Roboto_Medium,
    color : colors.black
    // color: colors.grey80,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
  },
  labelStyles: {
    fontFamily: FontType.Roboto_Medium,
    color: colors.black,
    marginBottom: 4,
    fontSize: responsiveFontSize(1.5),
  },
  itemTextStyle: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: FontType.Roboto_Regular,
  },
  errorText: {
    color: colors.error70,
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(0.8),
    position: 'absolute',
    bottom: -16,
  }
})