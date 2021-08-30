/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Generator from './src/generator';
import Header from './src/header';
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
    appName: 'My First App',
    random: [36,999]
  });
  
  onAddRandomNum= () =>{
    alert("add random number!")
  }

  const { appName, random } = state;

  return (
    <View style={mainView}>
      <Header name={appName} />
      <View>
        <Text
        style={mainText}
        onPress ={()=> alert("text touch event")}>Hello Wolrd</Text>
      </View>
      <NumList num={random} />
      <Generator add = {onAddRandomNum}/>
    </View>
  );
};

export default App;
