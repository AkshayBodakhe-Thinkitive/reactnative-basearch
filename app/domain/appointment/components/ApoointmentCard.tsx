import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../store/hooks';
import Card from '../../../components/Card/Card';
import { FeatherIcon } from '../../../components/Icons/FeatherIcon';
import MaterialCommunityIcons from '../../../components/Icons/MaterialCommunityIcons';
import { MaterialIcons } from '../../../components/Icons/MaterialIcons';
import ModalPopup from '../../../components/ModalPopup/ModalPopup';
import Row from '../../../components/Row/Row';
import SmallButton from '../../../components/SmallButton/SmallButton';
import CustomText from '../../../components/Text/CustomText';
import { colors } from '../../../constants/Colors';
import { FontType } from '../../../constants/FontType';
import { AppNavConstants } from '../../../constants/NavConstants';
import AppointmentStatus from '../components/AppointmentStatus';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

type Props = {
  type?: 'upcoming' | 'past';
  item?: any;
};

const appointmentDetails = [
  { label: 'Appointment Type', key: 'appointmentType' },
  { label: 'Mode', key: 'mode' },
  { label: 'Provider', key: 'provider' },
  { label: 'Reason', key: 'complaints' },
];

const AppointmentCard = ({ type, item }: Props) => {
  const [showCancel, setShowCancel] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  
  const onPressJoinCall = () => {
    navigation.navigate(AppNavConstants.READY_TO_JOIN, {
      item,
      sessionName: 'Appointment',
      displayName: 'Appointment',
      roleType: 1,
      token: 'token',
      sessionIdleTimeoutMins: 40,
    });
  };

  const renderDetails = () =>
    appointmentDetails.map((detail) => (
      <Row key={detail.key}>
        <CustomText style={styles.labelText}>{detail.label}</CustomText>
        <CustomText style={styles.valueText}>
          {detail.key === 'provider'
            ? `Dr. ${item?.Provider?.firstName} ${item?.Provider?.lastName}`
            : item?.[detail.key]?.replace(/_/g, ' ')}
        </CustomText>
      </Row>
    ));

  const renderActions = () => {
    if (type !== 'upcoming' || ['Cancelled', 'Signed_Off', 'No_Show'].includes(item?.status)) {
      return item?.status === 'Completed' && (
        <Row style={styles.completedActionRow}>
          <SmallButton
            outlined
            title="View Visit Details"
            containerStyle={styles.viewDetailsButton}
          />
        </Row>
      );
    }
    return (
      <Row style={styles.actionRow}>
        <SmallButton
          outlined
          title="Cancel"
          containerStyle={styles.actionButton}
          onPress={() => setShowCancel(true)}
        />
        {item?.status === 'Checked_In' ? (
          <SmallButton
            title="Join Call"
            containerStyle={styles.actionButton}
            onPress={onPressJoinCall}
          />
        ) : (
          <SmallButton
            title="Reschedule"
            containerStyle={styles.actionButton}
            // onPress={navigateReschedule}
          />
        )}
      </Row>
    );
  };

  return (
    <View style={styles.cardContainer}>
      <Card width="100%" height={null}>
        <View style={styles.cardHeader}>
          <Row style={styles.rowMarginVertical}>
            <MaterialCommunityIcons
              name="calendar-outline"
              color={colors.primary}
              size={responsiveFontSize(3)}
              style={styles.iconMarginRight}
            />
            <CustomText fontSize={responsiveFontSize(1.8)}>
              {new Date(item?.date).toDateString()}
            </CustomText>
            <View style={styles.flexEnd}>
              <AppointmentStatus color={item?.color}>
                {item?.status}
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
        <View style={styles.cardBody}>
          <View style={styles.cardBodyContent}>{renderDetails()}</View>
          {renderActions()}
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
  },
  cardBodyContent: {
    marginBottom: '3%',
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
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '46%',
  },
  completedActionRow: {
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
