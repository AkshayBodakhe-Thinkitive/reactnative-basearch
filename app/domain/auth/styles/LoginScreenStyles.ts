import { StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

export const LoginScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    signInFormContainer: {
      marginHorizontal: '7%',
      marginTop: '2%',
      zIndex: -1,
    },
    signInTxt: {
      color: colors.black,
      alignSelf: 'center',
      marginVertical: responsiveHeight(2),
      fontSize: responsiveFontSize(2.5),
      fontWeight: '700',
    },
    forgotPassRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: responsiveHeight(3),
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      forgPassTxt: {
        color: colors.grey66,
      },
  });
  