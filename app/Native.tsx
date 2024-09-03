import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from './components/ButtonComponent/ButtonComponent';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

const Native = () => {
  const [result, setResult] = useState<any>();

  const fun = async () => {
    const value = await RTNCalculator?.add(3, 7);
    setResult(value);
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={{color: 'black', fontSize: 20}}>{result}</Text>
      <Button title="Compute" onPress={fun} />
    </View>
  );
};

export default Native;

const styles = StyleSheet.create({});
