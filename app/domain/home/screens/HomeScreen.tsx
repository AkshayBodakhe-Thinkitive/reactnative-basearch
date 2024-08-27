import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {HomeScreenStyles as styles} from '../styles/HomeScStyles';
import {useNavigation} from '@react-navigation/native';
import HomeHeader from '../components/HomeHeaderComponent';
import TextInput from '../../../components/TextInput/TextInput';
import {Ionicons} from '../../../components/Icons/Ionicons';
import {colors} from '../../../constants/Colors';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import {ImagePath} from '../../../constants/ImagePaths';
import {homeScreenOptionsdata} from '../constants/StringConstants';
import ProviersConsulted from '../components/ProvidersConsulted';
import { formatDate } from '../../../utils/DateUtils';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const HomeScreen = () => {
  const patientData = {
    firstName: 'Akshay',
    lastName: 'Bodakhe',
    address: {
      addressLine1: 'Pune',
    },
  };

  const navigation = useNavigation<any>();

  const inputRef = useRef<any>();

  const navigateToProviderFun = () => {
    inputRef.current.blur();
    // navigation.navigate('providerlist', {focusOnSearch: true});
  };

  const optionsNavigation = (item: any) => {
    item.navigateTo ? navigation.navigate(item?.navigateTo) : null;
  };

  const consultedDrData = [{
    profilePicture: 'https://media.istockphoto.com/id/1203928556/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.webp?b=1&s=170667a&w=0&k=20&c=oTM7Z1qt6Td1TxUtda_3CS7uddsTcU1cdVmQnPser98=',
    firstName: 'John',
    lastName: 'Doe',
    provider_speciality_intermediate: [{speciality: {name: 'Cardiology'}}],
    date: '2023-06-19',
  }]

  const navigate = ({item}: any) => {
    // navigation.navigate(AppNavConstants.BOOK_APPOINTMENT, {item});
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HomeHeader patientData={patientData} />
        <View style={styles.searchProvInputContainer}>
          <TouchableOpacity
            onPress={navigateToProviderFun}
            style={styles.searchProviderInputTouch}></TouchableOpacity>
          <TextInput
            editable={false}
            ref={inputRef}
            placeholder="Search Provider Name or Speciality"
            leftIcon={
              <Ionicons
                name={'search'}
                color={colors.grey66}
                style={{fontSize: responsiveFontSize(2)}}
              />
            }
            inputBoxStyles={{backgroundColor: colors.white}}
          />
        </View>
        <ScrollView style={styles.pageContainer}>
          <View style={styles.scrollView}>
            <View style={styles.homeBgContainer}>
              <ImageBackground
                source={ImagePath.homeBackgroundImage}
                style={styles.homeBgImage}>
                <View style={styles.container2}>
                  <Text style={styles.logoText}>customEHR</Text>
                  <Text style={styles.welcomeTxt}>
                    Welcome {patientData?.firstName} 😊
                  </Text>
                  <Text style={styles.txt3}>You are in safe hand!</Text>
                  <Button
                    title="Find Providers"
                    buttonStyle={styles.btn1}
                    textStyle={{fontSize: responsiveFontSize(1.5)}}
                    onPress={navigateToProviderFun}
                  />
                </View>
              </ImageBackground>
            </View>

            <View style={styles.cardsContainer}>
              <View style={styles.cardItemsContainer}>
                <FlatList
                  data={homeScreenOptionsdata}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => optionsNavigation(item)}
                      key={item.id}
                      style={styles.cardItem}>
                      <Image
                        source={item.imagePath}
                        style={{height: '100%', width: '100%'}}
                      />
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id.toString()}
                  horizontal={false}
                  numColumns={3}
                  contentContainerStyle={{
                    paddingVertical: 10,
                  }}
                />
              </View>
            </View>
           
            {consultedDrData? (
              <ProviersConsulted
                drImage={consultedDrData[0].profilePicture}
                drFName={`${consultedDrData[0]?.firstName}`}
                drLName={`${consultedDrData[0]?.lastName} `}
                drSpeciality={
                  consultedDrData[0]?.provider_speciality_intermediate
                    ? `${consultedDrData[0]?.provider_speciality_intermediate?.[0]?.speciality?.name}`
                    : '-'
                }
                drDate={
                  consultedDrData[0].date
                    ? formatDate(consultedDrData[0]?.date)
                    : '-'
                }
                showHead
                onPressBookAgain={() => navigate({item: consultedDrData[0]})}
              />
            ) : (
              <View></View>
            )}

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
