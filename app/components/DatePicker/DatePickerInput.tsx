import React, {useState} from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../constants/FontType';
import {formatDate} from '../../utils/DateUtils';
import {colors} from '../../constants/Colors';
import Row from '../Row/Row';
import MaterialCommunityIcons from '../Icons/MaterialCommunityIcons';

interface Props {
  date: Date | any;
  setDate: (date: Date) => void;
  minimumDate?: any;
  style?: StyleProp<TextStyle>;
  maximumDate?: any;
  label?: string;
  mode?: 'date' | 'time';
  containerStyles?: StyleProp<ViewStyle>;
  disabled?: boolean;
  required?: boolean
}

const DatePickerInput = ({
  date,
  setDate,
  minimumDate,
  style,
  maximumDate,
  label,
  mode,
  containerStyles,
  disabled,
  required
}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: any) => {
    setDate && setDate(selectedDate);
    hideDatePicker();
  };

  const formatTime = (date: any) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${ampm}`;
  };

  const getFormattedValue = () => {
    if (!date) {
      return '';
    }

    if (mode === 'time') {
      return formatTime(date);
    }

    return formatDate(date);
  };

  return (
    <View style={[containerStyles]}>
      {label && <Text style={styles.labelStyles}>{label} {required && (<Text style={{color:'red'}}>*</Text>)}</Text>}
      <TouchableOpacity
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: 1,
        }}
        onPress={showDatePicker}
        disabled={disabled}></TouchableOpacity>
      <Row
        style={[
          styles.inputContainer,
          disabled && {backgroundColor: colors.grey29},
        ]}>
        <TextInput
          style={[styles.input, style]}
          value={getFormattedValue()}
          editable={false}
          placeholder={`Select ${mode === 'time' ? 'Time' : 'Date'}`}
          placeholderTextColor={'#1A1A1A66'}
        />
        <MaterialCommunityIcons
          name={mode === 'time' ? 'clock-outline' : 'calendar'}
          size={24}
          color={colors.grey66}
        />
      </Row>

      <DateTimePickerModal
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        date={date || new Date()}
        isVisible={isDatePickerVisible}
        mode={mode ? mode : 'date'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 8,
    paddingHorizontal: '2%',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.3,
    elevation: 4,
    justifyContent: 'space-between',
  },
  input: {
    height: responsiveHeight(5),
    paddingHorizontal: 10,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    color: '#565656',
  },
  labelStyles: {
    fontFamily: FontType.Roboto_Medium,
    color: colors.black,
    marginBottom: 4,
    fontSize: responsiveFontSize(1.5),
  },
});

export default DatePickerInput;
