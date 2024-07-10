import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FamilyDetailsStyles as styles} from '../styles/FamilyDetailStyles';
import ListEmptyComponent from '../../../components/ListEmptyComponent/ListEmptyComponent';
import FamilyMemberCard from '../components/FamilyMemberCard/FamilyMemberCard';
import {familyDataStatic} from '../constants/StringConstants';

const FamilyDetailScreen = () => {
  
  const renderItem = ({item}: any) => {
    return <FamilyMemberCard item={item} />;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled={false}
          ListEmptyComponent={
            <View>
              <ListEmptyComponent message="No family details found!" />
            </View>
          }
          contentContainerStyle={{paddingHorizontal: 5}}
          data={familyDataStatic}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default FamilyDetailScreen;
