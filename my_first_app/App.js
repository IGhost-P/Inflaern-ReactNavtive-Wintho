/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallBack } from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import Generator from './src/generator';
import Header from './src/header';
import Input from './src/inPut';
import NumList from './src/numList';

const styles = StyleSheet.create({
  mainView: {
    flex: 1, // 화면을 채우는 컴포넌트들 간에 차지하는 비율
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center', // 수평 정령
  //  justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
  },
});

const { mainView , mainText } = styles;

const App = function () {
  const [state, setState] = useState({
 
  });

  const {  } = state;

  const onAddTextInput = () => {
    alert('I want text Input')
  }
 

  return (
    <View style={mainView}>

      <Input/>
      <Button 
        title = "Add Text Input"
        onPress = {onAddTextInput}
        />
    </View>
  );
};

export default App;
