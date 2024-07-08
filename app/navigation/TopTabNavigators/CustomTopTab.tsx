import React from 'react';
import { FontType } from '../../constants/FontType';
import { colors } from '../../constants/Colors';
import { StyleProp, ViewStyle, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const CustomTopTab: React.FC<Props> = ({ tabs, onTabChange ,style}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderScene = SceneMap(
    Object.fromEntries(
      tabs.map((tab: Tab) => [
        tab.key,
        tab.component ? tab.component : () => null 
      ])
    )
  );

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
    onTabChange && onTabChange(newIndex);
  };

  return (
    <TabView
      navigationState={{ index, routes: tabs.map(tab => ({ key: tab.key, title: tab.title })) }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: colors.primary }}
          activeColor={colors.primary}
          inactiveColor={colors.grey66}
          labelStyle={{
            fontSize: responsiveFontSize(1.8),
            fontFamily: FontType.Roboto_Regular,
            textTransform: 'capitalize',
          }}
          style={[{ backgroundColor: colors.white, height: responsiveHeight(5.5) },style]}
        />
      )}
    />
  );
};

export default CustomTopTab;

interface Tab {
  key: string;
  title: string;
  component?: React.ComponentType<any>;
}

interface Props {
  tabs: Tab[];
  onTabChange?: (index: number) => void;
  style?: StyleProp<ViewStyle>
}