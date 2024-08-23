import { StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const ForgotPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    screenWrapper: {
        marginTop: '40%',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5)
    },
    weWillSend: {
        width: '55%',
        textAlign: 'center',
        color: '#1A1A1A66',
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(2)
    },
    textInput: {
        marginBottom: responsiveHeight(4),
        marginTop: responsiveHeight(3),
    },

    veryOtpBtn: {
        width: '100%',
        marginBottom: responsiveHeight(2.5),
        marginTop:responsiveHeight(2.5),
    },
    resendOTP: {
        color: colors.primary,
        textDecorationLine: 'underline',
        marginTop: responsiveHeight(2.5)
    }
})