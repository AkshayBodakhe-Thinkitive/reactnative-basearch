import { StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { getResponsiveFontSize, getResponsiveHeight } from "../../../utils/responsiveUtils";

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
      marginVertical: getResponsiveHeight(2),
      fontSize: getResponsiveFontSize(20),
      fontWeight: '700',
    },
    forgotPassRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: getResponsiveHeight(3),
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      forgPassTxt: {
        color: colors.grey66,
      },
  });
  