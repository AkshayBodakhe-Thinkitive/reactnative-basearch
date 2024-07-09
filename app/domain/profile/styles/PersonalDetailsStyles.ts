import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions';

export const PersonalDetailStyles = StyleSheet.create({
  personalDetailscontainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 70,
    padding: '1%',
  },

  insuranceContainer: {
    flex: 1,
  },
  insContainer: {
    paddingBottom: responsiveHeight(10),
    marginTop: '3%',
  },
  cardImageStyles: {
    height: responsiveHeight(21),
    width: '80%',
    marginVertical: 6,
    borderRadius: 8,
    marginLeft: '5%',
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#00000029',
  },
  addInsButton: {
    width: '50%',
    alignSelf: 'flex-end',
    height: responsiveHeight(4),
    marginVertical: '2%',
    marginRight:'3%'
  },
  buttonRow : {
    marginVertical: '2%',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    width: '40%',
    marginRight:'2%'
  },
  buttons : {
    width: '47%', 
    height: responsiveHeight(4)
  }
});
