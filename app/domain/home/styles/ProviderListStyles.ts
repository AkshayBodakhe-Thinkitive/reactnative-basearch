import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../utils/responsiveUtils';

export const ProviderListstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imgBg: {
    width: '110%',
    height: '100%',
    left: -20,
    position: 'absolute',
  },
  safeArea: {height: '100%', width: '90%', alignSelf: 'center'},
  bellBg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: getResponsiveHeight(7),
    width: getResponsiveWidth(12),
  },
  providerImageContainer: {
    width: getResponsiveHeight(12),
    borderRadius: 8,
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  listContainer: {
    marginTop: '-5%',
    padding: 10,
    marginBottom: 0,
    flex: 1,
  },
});
