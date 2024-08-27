import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Card from '../../../components/Card/Card';
import {FeatherIcon} from '../../../components/Icons/FeatherIcon';
import MaterialCommunityIcons from '../../../components/Icons/MaterialCommunityIcons';
import {MaterialIcons} from '../../../components/Icons/MaterialIcons';
import ModalPopup from '../../../components/ModalPopup/ModalPopup';
import Row from '../../../components/Row/Row';
import SmallButton from '../../../components/SmallButton/SmallButton';
import CustomText from '../../../components/Text/CustomText';
import {colors} from '../../../constants/Colors';
import {FontType} from '../../../constants/FontType';
import {AppNavConstants} from '../../../constants/NavConstants';
import {useAppDispatch} from '../../../store/hooks';
import AppointmentStatus from '../components/AppointmentStatus';

type Props = {
  type?: 'upcoming' | 'past';
  item?: any;
};

const appointmentDetails = [
  {label: 'Appointment Type', key: 'appointmentType'},
  {label: 'Mode', key: 'mode'},
  {label: 'Provider', key: 'provider'},
  {label: 'Reason', key: 'complaints'},
];

const AppointmentCard = ({type, item}: Props) => {
  const [showCancel, setShowCancel] = useState(false);

  const status = item?.status;

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

    const cancelAppointment = () => {
     
    };

    const fillValues = (key: any, value: any) => {
      // dispatch(fillAppointmentBookData<any>({key: key, value: value}));
    };


    const onPressJoinCall = async () => {    
        const sessionName = 'Appointment';
        const roleType = 1;
        const displayName = 'Appointment'
        const sessionIdleTimeoutMins = 40;
        navigation.navigate(AppNavConstants.READY_TO_JOIN, {
          item,
          sessionName,
          displayName,
          roleType,
          token: 'token',
          sessionIdleTimeoutMins,
        });
      
    };

  return (
    <View style={styles.cardContainer}>
      <Card width={'100%'} height={null}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderContent}>
            <Row style={styles.rowMarginVertical}>
              <MaterialCommunityIcons
                name="calendar-outline"
                color={colors.primary}
                size={responsiveFontSize(3)}
                style={styles.iconMarginRight}
              />
              <CustomText fontSize={responsiveFontSize(1.8)}>
                {`${new Date(item?.date).toDateString()}`}
              </CustomText>
              <View style={styles.flexEnd}>
                <AppointmentStatus color={item?.color}>
                  {status}
                </AppointmentStatus>
              </View>
            </Row>
            <Row style={styles.rowMarginVertical}>
              <FeatherIcon
                name="clock"
                color={colors.primary}
                size={responsiveFontSize(3)}
                style={styles.iconMarginRight}
              />
              <CustomText fontSize={responsiveFontSize(1.8)}>
                {item?.start}
              </CustomText>
            </Row>
            {item?.Locations?.name && (
              <Row style={styles.rowMarginVertical}>
                <MaterialIcons
                  name="location-on"
                  color={colors.primary}
                  size={responsiveFontSize(3)}
                  style={styles.iconMarginRight}
                />
                <CustomText fontSize={responsiveFontSize(1.8)}>
                  {item?.Locations?.name}
                </CustomText>
              </Row>
            )}
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.cardBodyContent}>
            {appointmentDetails.map(detail => (
              <Row key={detail.key}>
                <CustomText style={styles.labelText}>{detail.label}</CustomText>
                <CustomText style={styles.valueText}>
                  {detail.key === 'provider'
                    ? `Dr. ${item?.Provider?.firstName} ${item?.Provider?.lastName}`
                    : item?.[detail.key]?.replace(/_/g, ' ')}
                </CustomText>
              </Row>
            ))}
          </View>
          {type === 'upcoming' &&
          status !== 'Cancelled' &&
          status !== 'Signed_Off' &&
          status !== 'No_Show' ? (
            <Row style={styles.actionRow}>
              <SmallButton
                outlined
                title="Cancel"
                containerStyle={styles.actionButton}
                onPress={() => setShowCancel(true)}
              />
              {status === 'Checked_In' ? (
                <SmallButton
                  title="Join Call"
                  containerStyle={styles.actionButton}
                    onPress={onPressJoinCall}
                />
              ) : (
                <SmallButton
                  title="Reschedule"
                  containerStyle={styles.actionButton}
                  //   onPress={navigateReschedule}
                />
              )}
            </Row>
          ) : (
            <>
              {status === 'Completed' && (
                <Row style={styles.completedActionRow}>
                  <SmallButton
                    outlined
                    title="View Visit Details"
                    containerStyle={styles.viewDetailsButton}
                  />
                </Row>
              )}
            </>
          )}
        </View>
      </Card>
      <ModalPopup show={showCancel} setShow={setShowCancel}>
        <View style={styles.modalContent}>
          <CustomText
            fontFamily={FontType.Roboto_Medium}
            fontSize={responsiveFontSize(2.4)}
            style={styles.modalTitle}>
            Cancel Appointment
          </CustomText>
          <CustomText fontSize={responsiveFontSize(2)} style={styles.modalText}>
            Are you sure you want to cancel the appointment?
          </CustomText>
        </View>
        <Row style={styles.modalActions}>
          <SmallButton
            outlined
            title="Yes"
            containerStyle={styles.modalYesButton}
            textStyle={styles.modalYesButtonText}
            // onPress={cancelAppointment}
          />
          <SmallButton
            outlined
            title="No"
            containerStyle={styles.modalNoButton}
            onPress={() => setShowCancel(false)}
          />
        </Row>
      </ModalPopup>
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
  },
  cardHeader: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#1A1A1A66',
    justifyContent: 'space-between',
    flex: 0.4,
  },
  cardHeaderContent: {
    justifyContent: 'space-between',
  },
  rowMarginVertical: {
    marginVertical: '1%',
  },
  iconMarginRight: {
    marginRight: 10,
  },
  flexEnd: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cardBody: {
    padding: 12,
    flex: 0.6,
    justifyContent: 'space-between',
  },
  cardBodyContent: {
    flex: 0.6,
    height: responsiveHeight(11),
    marginBottom: '3%',
    justifyContent: 'space-between',
  },
  labelText: {
    width: '40%',
    color: '#00000066',
    fontSize: responsiveFontSize(1.8),
  },
  valueText: {
    width: '40%',
    fontSize: responsiveFontSize(1.8),
  },
  actionRow: {
    flex: 0.3,
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '46%',
  },
  completedActionRow: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  viewDetailsButton: {
    width: '46%',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    marginBottom: responsiveHeight(2),
  },
  modalText: {
    textAlign: 'center',
    marginBottom: responsiveHeight(3),
  },
  modalActions: {
    justifyContent: 'space-between',
  },
  modalYesButton: {
    width: '46%',
    borderColor: '#FF2300',
  },
  modalYesButtonText: {
    color: '#FF2300',
  },
  modalNoButton: {
    width: '46%',
  },
});
