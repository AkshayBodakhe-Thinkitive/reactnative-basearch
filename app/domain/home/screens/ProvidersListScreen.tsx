import {FlatList, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {ProviderListstyles as styles} from '../styles/ProviderListStyles';
import HeaderBg from '../../../components/HeaderBg/HeaderBg';
import Header from '../../../components/Header/Header';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../utils/responsiveUtils';
import TextInput from '../../../components/TextInput/TextInput';
import {Ionicons} from '../../../components/Icons/Ionicons';
import {colors} from '../../../constants/Colors';
import { staticProvidersList } from '../constants/StringConstants';
import ProviderListItem from '../components/ProviderListItem';
import ListEmptyComponent from '../../../components/ListEmptyComponent/ListEmptyComponent';

const ProvidersListScreen = () => {
  const inputRef = useRef<any>();

  const loading = false

  return (
    <View style={styles.container}>
      <HeaderBg style={{height: getResponsiveHeight(16)}}>
        <Header title="Providers"></Header>
        <View style={{paddingHorizontal: getResponsiveWidth(5), top: '-5%'}}>
          <TextInput
            placeholder="Search Provider Name"
            ref={inputRef}
            leftIcon={
              <Ionicons
                name={'search'}
                color={colors.grey66}
                style={{fontSize: getResponsiveFontSize(18)}}
              />
            }
          />
        </View>
      </HeaderBg>
      <View style={styles.listContainer}>
        <FlatList
          data={staticProvidersList}
          ListEmptyComponent={
            <View style={{marginTop: '40%'}}>
              {!loading && (
                <ListEmptyComponent message="Providers not found!" />
              )}
            </View>
          }
          renderItem={({item, index}) => {
           if(index === 0){
           }
            return (
              <ProviderListItem
                image={item.imageUrl}
                name={`${item?.firstName} ${item?.lastName}`}
                rating={item.averageRating}
                speciality={
                  item?.provider_speciality_intermediate[0]?.speciality?.name
                }
                onPressBook={() => {
                  inputRef?.current?.blur();
                //   navigation.navigate(AppNavConstants.BOOK_APPOINTMENT, {item});
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProvidersListScreen;
