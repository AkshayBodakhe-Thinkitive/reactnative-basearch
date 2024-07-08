import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../../../components/Card/Card";
import SmallButton from "../../../components/SmallButton/SmallButton";
import CustomText from "../../../components/Text/CustomText";
import TextButton from "../../../components/TextButton/TextButton";
import { colors } from "../../../constants/Colors";
import { FontType } from "../../../constants/FontType";
import { useAppDispatch } from "../../../store/hooks";
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth } from "../../../utils/responsiveUtils";


const ProviersConsulted = ({
  drImage,
  drFName,
  drLName,
  drSpeciality,
  drDate,
  showHead,
  onPressBookAgain
}: ProvidersConsultedProps) => {
 

  const drInName = drFName ? `${drFName?.charAt(0)}${drLName?.charAt(0)}` : ''

  const drName = drFName ? `${drFName} ${drLName}` : ''

  const navigation = useNavigation<any>()

  const navigateFun = () => {
  //  navigation.navigate(AppNavConstants.RECENT_PROVIDERS,{providerType:"recent"})
  }

  const navigate = (item:any) => {
    // navigation.navigate(AppNavConstants.BOOK_APPOINTMENT, {item});
  }

  return (
    <View style={styles.providerConsultedContainer}>
     {showHead && <View style={styles.provConsTxtRow}>
        <Text style={styles.provConsTxt}>Providers you have consulted</Text>
        <TextButton text="View All" onPress={navigateFun}/>
      </View>}
      <View style={{marginBottom: getResponsiveHeight(2)}}>
        <Card height={null} style={styles.providerConsultedCard}>
          <View style={[styles.providerImageContainer]}>
          {drImage ? (
            <Image
              source={{
                uri: drImage,
              }}
              style={styles.providerImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.initialsContainer}>
              <CustomText
                fontSize={getResponsiveFontSize(30)}
                fontFamily={FontType.Roboto_Bold}>
                {drInName}
              </CustomText>
            </View>
          )}
          </View>
          <View style={{flex: 1}}>
            <View>
              <View style={styles.drBookAgainRow}>
                <Text style={styles.drName}>{`Dr. ${drName}`}</Text>
                <SmallButton title="Book Again" onPress={onPressBookAgain}/>
              </View>
              <Text style={styles.drTitle}>{drSpeciality}</Text>
              <Text style={styles.drDate}>{drDate}</Text>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default ProviersConsulted;

interface ProvidersConsultedProps {
  drImage: any;
  drFName: string;
  drLName: string;
  drSpeciality: string;
  drDate: string;
  showHead?:boolean
  onPressBookAgain:()=>void
}

const borderRadiusPercentage = 50;
const componentWidth = getResponsiveHeight(10);
const borderRadiusPixel = (borderRadiusPercentage / 100) * componentWidth;

const styles = StyleSheet.create({
  providerConsultedContainer: {
    borderWidth: 0,
    flex: 1,
    marginHorizontal: 10,
  },

  provConsTxtRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  providerConsultedCard: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
  },
  providerImageContainer: {
    borderColor: colors.primary,
    width: getResponsiveHeight(9.5),
    height: getResponsiveHeight(9.5),
    borderRadius: borderRadiusPixel,
    marginHorizontal: 10,
  },
  provConsTxt: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: getResponsiveFontSize(20),
    color: colors.black,
  },
  drBookAgainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  drName: {
    fontFamily: FontType.Roboto_Bold,
    fontSize: getResponsiveFontSize(20),
    color: colors.black,
  },
  drTitle: {
    fontFamily: FontType.Roboto_Medium,
    color: '#00000066',
    marginBottom: 8,
    marginTop: -5,
  },
  drDate: {
    fontFamily: FontType.Roboto_Regular,
    color: '#00000066',
  },
  providerImage: {
    width: componentWidth,
    height: componentWidth,
    borderRadius: borderRadiusPixel,
    // marginHorizontal: 10,
    backgroundColor :colors.white,
    alignItems :'center',
    justifyContent : 'center'
  },
  initialsContainer: {
    width: getResponsiveWidth(20),
    height: '100%',
    borderRadius: 8,
    marginHorizontal: 5,
    marginRight : 10,
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
