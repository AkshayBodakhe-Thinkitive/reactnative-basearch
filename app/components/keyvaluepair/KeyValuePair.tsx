import {StyleSheet, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { isDate, formatDate } from '../../utils/DateUtils';
import CustomText from '../Text/CustomText';

type KeyMapping = {
  [key: string]: string;
};

type KeyValuePairsProps = {
  dataArray: any[];
  keyMapping: KeyMapping;
  labelStyle?: any;
  valueStyle?: any;
};

const KeyValuePairs = ({
  dataArray,
  keyMapping,
  labelStyle,
  valueStyle,
}: KeyValuePairsProps) => {

  const capitalizeFirstLetter = (str:any) => {
    if (typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str; 
  };

  return (
    <View style={styles.container}>
      {dataArray.map((dataItem: any, index: any) => (
        <View key={index}>
          {Object.entries(keyMapping).map(([dataKey, label]: any) => (
            <View key={dataKey} style={styles.row}>
              <CustomText style={[styles.label, labelStyle]}>
                {label} :{' '}
              </CustomText>
              <CustomText
                style={[
                  styles.value,
                  valueStyle
                ]}
              >
              {isDate(dataItem[dataKey]) 
                  ? formatDate(dataItem[dataKey]) 
                  : dataItem[dataKey] != null 
                  ? capitalizeFirstLetter(dataItem[dataKey])
                    : '-'}
              </CustomText>
              
            </View>
          ))}
          {index !== dataArray.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

export default KeyValuePairs;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(0.6),
  },
  label: {
    marginRight: 4,
    width: '50%',
    color: '#1A1A1A80',
    fontSize: responsiveFontSize(1.7),
  },
  value: {
    flex: 1,
    fontSize: responsiveFontSize(1.7),
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginVertical: 8,
  },
});
