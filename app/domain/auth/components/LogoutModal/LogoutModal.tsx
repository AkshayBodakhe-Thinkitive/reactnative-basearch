import React from 'react';
import {Text, View} from 'react-native';
import ModalPopup from '../../../../components/ModalPopup/ModalPopup';
import { MaterialIcons } from '../../../../components/Icons/MaterialIcons';
import { colors } from '../../../../constants/Colors';
import CustomText from '../../../../components/Text/CustomText';
import Row from '../../../../components/Row/Row';
import SmallButton from '../../../../components/SmallButton/SmallButton';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';


interface LogoutModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({show, setShow, onLogout}) => {
  return (
    <ModalPopup show={show} setShow={() => setShow(!show)}>
      <View style={{alignItems: 'center'}}>
        <MaterialIcons
          name="logout"
          color={colors.black}
          size={responsiveFontSize(10)}
        />
        <CustomText
          fontSize={responsiveFontSize(2)}
          style={{
            textAlign: 'center',
            marginBottom: responsiveHeight(2),
            marginTop: '5%',
            color: colors.black,
          }}>
          {'Logging out will delete all your data from this device!'}
        </CustomText>
      </View>
      <Row style={{justifyContent: 'space-between'}}>
        <SmallButton
          outlined
          title="Cancel"
          containerStyle={{
            width: '46%',
            height: responsiveHeight(5),
            borderWidth: 0.5,
          }}
          onPress={() => setShow(false)}
        />
        <SmallButton
          outlined
          title={'Logout'}
          containerStyle={{
            width: '46%',
            height: responsiveHeight(5),
            borderColor: colors.red300,
            borderWidth: 0.5,
          }}
          textStyle={{color: colors.red300}}
          onPress={onLogout}
        />
      </Row>
    </ModalPopup>
  );
};

export default LogoutModal;
