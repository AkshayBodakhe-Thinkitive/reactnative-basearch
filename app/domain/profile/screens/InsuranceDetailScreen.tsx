import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListEmptyComponent from '../../../components/ListEmptyComponent/ListEmptyComponent';
import InsuranceItem from '../components/InsuranceItem/InsuranceItem';
import {insuranceDataStatic} from '../constants/StringConstants';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const InsuranceDetailScreen = () => {
  return (
    <View style={styles.insuranceContainer}>
      <FlatList
        data={insuranceDataStatic.concat(insuranceDataStatic)}
        contentContainerStyle={styles.insContainer}
        ListEmptyComponent={() => (
          <View style={{marginTop: '40%'}}>
            <ListEmptyComponent message="No Insurance data to show!" />
          </View>
        )}
        renderItem={({item}) => <InsuranceItem item={item} />}
      />
    </View>
  );
};

export default InsuranceDetailScreen;

const styles = StyleSheet.create({
  insuranceContainer: {
    flex: 1,
  },
  insContainer: {
    paddingBottom: responsiveHeight(10),
    marginTop: '3%',
  },
});
