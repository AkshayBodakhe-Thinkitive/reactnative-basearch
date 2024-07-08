import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';
import { isIOS } from '../../../utils/DeviceUtils';
import { getResponsiveFontSize, getResponsiveHeight } from '../../../utils/responsiveUtils';
import { FontType } from '../../../constants/FontType';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchProvInputContainer: {
    marginHorizontal: 11,
    marginTop: 10,
  },
  searchProviderInputTouch: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    zIndex: 1,
  },
  pageContainer: {
    // marginBottom: isAndroid ? responsiveHeight(19) : responsiveHeight(10),
},
scrollView: {
    // paddingBottom: responsiveHeight(8),
    // marginBottom: responsiveHeight(8),
    // borderWidth:1
},
homeBgContainer : {
    height: getResponsiveHeight(22),
    marginHorizontal: 10,
    alignItems: 'center',
  },
homeBgImage: {
    marginBottom :4,
    height: isIOS ? getResponsiveHeight(22) : getResponsiveHeight(23.2),
    width: '100%',
    // borderWidth:1,
},
container2: {
    width: '60%',
    padding: 16,
},
logoText : {
    fontSize: getResponsiveFontSize(25),
    color: colors.primary,
    fontWeight:'600',
    opacity : 0.8,
    fontFamily: FontType.Roboto_Bold,
},
welcomeTxt: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: getResponsiveFontSize(18),
    marginVertical: '5%',
    color: colors.black,
    fontWeight:'500'
},
txt3: {
    fontFamily: FontType.Roboto_Regular,
    fontSize: getResponsiveFontSize(15),
    marginBottom: '10%',
    color: colors.black
},
btn1: {
    height: '20%',
    width: '65%',
},
cardsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5
},
cardItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
},
cardItem: {
    height: 130,
    width: '33.4%'
},
 providersConsultedContainer : {
    marginHorizontal : 10,
    marginBottom : 5
 },
 headText : {
    fontSize : getResponsiveFontSize(15),
    fontWeight : '500'
 }
});
