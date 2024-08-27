import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';

import {colors} from '../../constants/Colors';
import {FontType} from '../../constants/FontType';
import { MaterialIcons } from '../../components/Icons/MaterialIcons';

interface CustomDrawerItemProps {
  label: string;
  icon: React.ReactNode;
  onPress: () => void | any;
}

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({label, icon, onPress}) => {
  return (
    <DrawerItem
      label={() => (
        <View style={styles.itemContainer}>
          {icon}
          <Text style={styles.itemLabel}>{label}</Text>
          <MaterialIcons
            name={'arrow-forward-ios'}
            size={21}
            color={colors.grey66}
            style={styles.arrowIcon}
          />
        </View>
      )}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '110%',
  },
  itemLabel: {
    color: colors.grey66,
    marginLeft: 20,
    fontFamily: FontType.Roboto_Medium,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default CustomDrawerItem;
