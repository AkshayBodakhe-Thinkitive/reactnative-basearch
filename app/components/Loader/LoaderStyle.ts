import {StyleSheet} from 'react-native';

export const LoaderStyle = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    elevation: 2,
    alignItems: 'center',
    height: '100%',
    flex: 1,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
