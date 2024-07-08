
import { StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth } from "../../../utils/responsiveUtils";

export const ForgotPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    screenWrapper: {
        marginTop: '40%',
        alignItems: 'center',
        paddingHorizontal: getResponsiveWidth(5)
    },
    weWillSend: {
        width: '55%',
        textAlign: 'center',
        color: '#1A1A1A66',
        fontSize: getResponsiveFontSize(14),
        marginVertical: getResponsiveHeight(2)
    },
    textInput: {
        marginBottom: getResponsiveHeight(4),
        marginTop: getResponsiveHeight(3),
    },

    veryOtpBtn: {
        width: '100%',
        marginBottom: getResponsiveHeight(2.5),
        marginTop:getResponsiveWidth(4.5),
    },
    resendOTP: {
        color: colors.primary,
        textDecorationLine: 'underline',
        marginTop: getResponsiveHeight(2.5)
    }
})