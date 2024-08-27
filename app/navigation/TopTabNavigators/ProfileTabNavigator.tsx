import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontType} from '../../constants/FontType';
import {colors} from '../../constants/Colors';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import PersonalDetailTabScreen from '../../domain/profile/screens/PersonalDetailTabScreen';
import FamilyDetailScreen from '../../domain/profile/screens/FamilyDetailScreen';
import InsuranceDetailScreen from '../../domain/profile/screens/InsuranceDetailScreen';


const renderScene = SceneMap({
  first: PersonalDetailTabScreen,
  second: FamilyDetailScreen,
  third: InsuranceDetailScreen,
});

export default function ProfileTabNavigator() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Personal Details'},
    {key: 'second', title: 'Family Details'},
    {key: 'third', title: 'Insurance'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: colors.primary}}
          activeColor={colors.primary}
          inactiveColor={colors.grey66}
          labelStyle={{
            fontSize: responsiveFontSize(1.6),
            fontFamily: FontType.Roboto_Regular,
            textTransform: 'capitalize',
            marginTop: responsiveHeight(1.5),
          }}
          style={{
            backgroundColor: '#0097F014',
            elevation:0,
            height:
              Platform.OS === 'android'
                ? responsiveHeight(7)
                : responsiveHeight(6),
          }}
        />
      )}
    />
  );
}
