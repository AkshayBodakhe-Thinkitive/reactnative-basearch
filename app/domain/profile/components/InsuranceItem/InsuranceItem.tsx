import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import Card from '../../../../components/Card/Card';
import Row from '../../../../components/Row/Row';
import CustomText from '../../../../components/Text/CustomText';
import KeyValuePairs from '../../../../components/keyvaluepair/KeyValuePair';
import { colors } from '../../../../constants/Colors';
import { FontType } from '../../../../constants/FontType';
import { AppNavConstants } from '../../../../constants/NavConstants';
import { KEY_MAPPING_INSURANCE } from '../../constants/StringConstants';
import Button from '../../../../components/ButtonComponent/ButtonComponent';

const InsuranceItem = ({item}:any) => {
  const navigation = useNavigation<any>();

  return (
    <Card
      width={null}
      height={null}
      style={{marginBottom: 10, marginHorizontal: '3%'}}>
      <View style={{margin: '3%'}}>
        <Row>
          <CustomText
            color={colors.primary}
            fontFamily={FontType.Roboto_Medium}
            fontSize={responsiveFontSize(2)}>
            {item?.type} Insurance
          </CustomText>
        </Row>
        <KeyValuePairs
          dataArray={[item]}
          keyMapping={KEY_MAPPING_INSURANCE}
          labelStyle={{width: '40%', marginLeft: '-4%'}}
        />
      </View>
      {item?.frontImage && (
        <Image
          source={{uri: item?.frontImage}}
          resizeMode="cover"
          style={styles.cardImageStyles}
        />
      )}
      {item?.backImage && (
        <Image
          source={{uri: item?.backImage}}
          resizeMode="cover"
          style={styles.cardImageStyles}
        />
      )}
      <Row style={styles.buttonRow}>
        <Button
          buttonStyle={styles.buttons}
          title="View"
        //   onPress={() =>
        //     navigation.navigate(AppNavConstants.ADD_INSURANCE, {
        //       item: item,
        //       edit: false,
        //     })
        //   }
        />
        <Button
          buttonStyle={styles.buttons}
          outlined
          title="Edit"
        //   onPress={() =>
        //     navigation.navigate(AppNavConstants.ADD_INSURANCE, {
        //       item: item,
        //       edit: true,
        //     })
        //   }
        />
      </Row>
    </Card>
  );
};

export default InsuranceItem;

const styles = StyleSheet.create({
    cardImageStyles: {
        height: responsiveHeight(21),
        width: '80%',
        marginVertical: 6,
        borderRadius: 8,
        marginLeft: '5%',
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
})