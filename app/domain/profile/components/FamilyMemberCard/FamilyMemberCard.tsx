import {StyleSheet} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Card from '../../../../components/Card/Card';
import Row from '../../../../components/Row/Row';
import KeyValuePairs from '../../../../components/keyvaluepair/KeyValuePair';
import {KEY_MAPPING_FAMILY} from '../../constants/StringConstants';
import Button from '../../../../components/ButtonComponent/ButtonComponent';

interface Props {
  item: any;
}

const FamilyMemberCard = ({item}: Props) => {
  const handleEdit = (item: any) => {
    // navigation.navigate(AppNavConstants.EDIT_FAMILY, {item, edit: true});
  };
  return (
    <Card width={'100%'} height={null} style={styles.card}>
      <KeyValuePairs
        dataArray={[item]}
        keyMapping={KEY_MAPPING_FAMILY}
        labelStyle={{width: '35%'}}
      />
      <Row style={styles.rowStyle}>
        <Button
          buttonStyle={{height: responsiveHeight(3)}}
          outlined
          onPress={() => handleEdit(item)}
          title="Edit Details"
        />
      </Row>
    </Card>
  );
};

export default FamilyMemberCard;

const styles = StyleSheet.create({
  rowStyle: {
    justifyContent: 'flex-end',
    paddingBottom: '3%',
    paddingRight: '3%',
  },
  card: {
    marginVertical: '1%',
  },
});
