import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './app/navigation/StackNavigators/AppNavigator'

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})