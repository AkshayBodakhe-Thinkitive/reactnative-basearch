import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement, useState} from 'react';
import {FontType} from '../../constants/FontType';
import Row from '../Row/Row';
import CustomText from '../Text/CustomText';
import {useNavigation} from '@react-navigation/native';
import {ImagePath} from '../../constants/ImagePaths';
import {MaterialIcons} from '../Icons/MaterialIcons';
// import NotificationSideModal from '../../screens/home/components/notificationsidemodal/NotificationSideModal';
import {colors} from '../../constants/Colors';
import { Ionicons } from '../Icons/Ionicons';
import { getResponsiveFontSize, getResponsiveHeight, getResponsiveWidth } from '../../utils/responsiveUtils';

const Header = ({title, leftIcon, containerStyle}: HeaderProps) => {

  const navigation = useNavigation();

  return (
    <View>
      <Row style={[styles.row, containerStyle]}>
        <TouchableOpacity
          style={styles.backArrowContainer}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-sharp"
            color={colors.black}
            size={getResponsiveFontSize(20)}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <CustomText
            fontSize={getResponsiveFontSize(20)}
            fontFamily={FontType.Roboto_Medium}>
            {title}
          </CustomText>
        </View>
        {leftIcon ? leftIcon : <>
         <NotificationBell/>
        </>}
      </Row>
    </View>
  );
};

export default Header;

export const NotificationBell = () => {
  const [showModal, setShowModal] = useState(false);

  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotificationCount = (count: any) => {
    setNotificationCount(count);
  };

  return (
    <TouchableOpacity onPress={() => setShowModal(!showModal)}>
      <ImageBackground source={ImagePath.bellBg} style={styles.bellBg}>
        <MaterialIcons
          name="notifications-none"
          color={colors.black}
          size={getResponsiveFontSize(22)}
        />
        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{notificationCount}</Text>
          </View>
        )}
      </ImageBackground>
      {/* <NotificationSideModal
        visible={showModal}
        setVisible={setShowModal}
        onNotificationCountChange={handleNotificationCount}
      /> */}
    </TouchableOpacity>
  );
};

export interface HeaderProps {
  title?: string;
  leftIcon?: ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    height: '40%',
    marginBottom: getResponsiveHeight(1),
    paddingHorizontal: 6,
  },
  bellBg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: getResponsiveHeight(7),
    width: getResponsiveWidth(12),
  },
  titleContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  backArrowContainer: {
    zIndex: 2,
    paddingHorizontal: 8,
    height: '100%',
    justifyContent: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 5,
    right: 3,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
