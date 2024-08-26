import { StyleSheet } from "react-native";


export const BottomBarStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    shawdow: {
      shadowColor: '#00000050',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
    },
    bottomBar: {

    },
    btnCircleUp: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 18,
    },
    imgCircle: {
      width: 30,
      height: 30,
      tintColor: 'gray',
    },
    tabbarItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: 30,
      height: 30,
    },
    screen1: {
      flex: 1,
      backgroundColor: '#BFEFFF',
    },
    screen2: {
      flex: 1,
      backgroundColor: '#FFEBCD',
    },
  });