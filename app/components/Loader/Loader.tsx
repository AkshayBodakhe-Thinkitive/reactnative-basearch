import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {LoaderStyle} from './LoaderStyle';
import { colors } from '../../constants/Colors';


export const Loader = () => {
  return (
      <View style={LoaderStyle.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
  );
};

export default Loader;
