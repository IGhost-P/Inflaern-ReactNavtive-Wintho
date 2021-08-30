/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallBack } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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

  const { appName, random } = state;

  const onAddRandomNum = () => {
    randomNum = Math.floor(Math.random()*100)+1;
    setState(state => {
      return {
        random : [...random, randomNum]
      }
    })
  }

  const onNumDelete = (position) => {
    setState({random : random.filter((num,index)=> {return position !== index})}) // {random} = state이고 setState({state})임
  }

 

  return (
    <View style={mainView}>
      <Header name={appName} />
      <View>
        <Text
        style={mainText}
        onPress ={()=> alert("text touch event")}>Hello Wolrd</Text>
      </View>

      <Generator add = {onAddRandomNum}/>

      <ScrollView 
        style ={{width : '100%'}}
        >
        <NumList num={random}
                deleteNum={onNumDelete}
                  />
      </ScrollView> 
      
    </View>
  );
};

export default App;
