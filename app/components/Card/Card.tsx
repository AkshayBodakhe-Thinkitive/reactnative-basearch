import {DimensionValue, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../../constants/Colors';

const Card = ({ children, style, height = 100, width, touchable = false }: Props) => {
  if (touchable) {
    return (
      <TouchableOpacity style={[styles.container, { height, width }, style]}>
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, { height, width }, style]}>
        {children}
      </View>
    );
  }
};


export default Card;

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    backgroundColor: colors.white,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    borderRadius: 8,
    borderWidth:0.5,
    borderColor:'rgba(0,0,0,0.1)'
  },
});

interface Props {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  height?: DimensionValue | undefined;
  width?: DimensionValue | undefined;
  touchable?: boolean;
}
