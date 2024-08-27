import {Image, StyleSheet, Text, View} from 'react-native';
import React, {} from 'react';
import Card from '../../../components/Card/Card';
import Row from '../../../components/Row/Row';
import SmallButton from '../../../components/SmallButton/SmallButton';
import CustomText from '../../../components/Text/CustomText';
import { FontType } from '../../../constants/FontType';
import StarRating from '../../../components/StarRating/StarRating';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';


const ProviderListItem = ({
  name,
  rating,
  image,
  speciality,
  onPressBook,
  date,
  isRecent
}: ProviderListItemProps) => {

  const getInitials = (name: string) => {
    const words = name.split(' ');
    if (words.length > 1) {
      return words[0][0] + words[words.length - 1][0];
    } else {
      return words[0][0];
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.providerImageContainer}>
          {image ? (
            <Image
              source={{
                uri: image,
              }}
              style={styles.providerImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.initialsContainer}>
              <CustomText
                fontSize={responsiveFontSize(3)}
                fontFamily={FontType.Roboto_Bold}>
                {getInitials(name).toUpperCase()}
              </CustomText>
            </View>
          )}
        </View>
        <View style={styles.providerDetailsContainer}>
          <Row style={styles.providerHeader}>
            <CustomText
              fontSize={responsiveFontSize(2)}
              fontFamily={FontType.Roboto_Medium}>
              {name}
            </CustomText>
            <SmallButton title={isRecent ? "Book again" : "Book"} onPress={onPressBook} />
          </Row>
          <CustomText
            fontSize={responsiveFontSize(1.7)}
            fontFamily={FontType.Roboto_Medium}
            color="#1A1A1A66">
            {speciality ? speciality : '-'}
          </CustomText>
          <Row style={styles.providerFooter}>
            {date ? (
              <Text>{date}</Text>
            ) : (
              <StarRating value={rating} disabled />
            )}
          </Row>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  card: {
    width: '98%',
    flexDirection: 'row',
    padding: '1%',
    alignSelf: 'center',
  },
  providerImageContainer: {
    width: responsiveHeight(12),
    borderRadius: 8,
    marginHorizontal: 5,
    marginRight: '3%',
    alignSelf: 'center',
    height: '95%',
  },
  providerImage: {
    flex: 1,
    width: 'auto',
    borderRadius: 8,
  },
  providerDetailsContainer: {
    flex: 0.97,
    justifyContent: 'space-between',
    height: '85%',
    alignSelf: 'center',
  },
  providerHeader: {
    justifyContent: 'space-between'
  },
  providerFooter: {
    justifyContent: 'space-between',
  },
  starImage: {
    height: responsiveHeight(2.5),
    width: '55%',
    marginBottom: 5,
  },
  initialsContainer: {
    width: responsiveHeight(12),
    height: '100%',
    borderRadius: 8,
    marginHorizontal: 5,
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProviderListItem;

interface ProviderListItemProps {
  name: string;
  rating?: number;
  image?: string;
  speciality?: string;
  onPressBook?: () => void;
  date?: any;
  isRecent?:boolean
}
