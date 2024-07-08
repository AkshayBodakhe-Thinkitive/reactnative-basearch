import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";
import { FontType } from "../../constants/FontType";
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth } from "../../utils/responsiveUtils";


export const ButtonComponentStyles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor : colors.primary,
        borderWidth : 1,
        height : getResponsiveHeight(5),
    },
    btnText: {
        color: colors.white,
        fontSize: getResponsiveFontSize(17),
        marginHorizontal: getResponsiveWidth(2.5),
        fontFamily: FontType.Roboto_Medium,
    },
    outlinedButton: {
        backgroundColor: 'white', 
    }
})