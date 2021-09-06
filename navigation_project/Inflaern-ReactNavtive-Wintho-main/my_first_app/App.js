/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallBack } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

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
    margin: 20,
    backgroundColor : 'pink',
    padding: 20
  },
  inPut: {
    width : '100%',
    backgroundColor: '#cecece',
    marginTop : 20,
    fontSize: 25,
    padding:10
  }
});

const { mainView , mainText, inPut } = styles

const App = function () {
  
  const [ text, setText] = useState('') // 상태 대문자로 했다가 에러났었음
  const [ alphabet, setAlphabet] = useState(['a','b','c'])
 
  const onChangeInput = (e) => {
    setText(e);
  }

  const onAddTextInput = () => {
     setText('');
     setAlphabet([...alphabet, text]);
    
  }
 

  return (
    <View style={mainView}>
      <TextInput 
            value = {text}
            style ={inPut}
            onChangeText = {onChangeInput}
        />
      <Button 
        title = "Add Text Input"
        onPress = {onAddTextInput}
        />
        
         <ScrollView style ={{width:'100%'}}>
           {
             alphabet.map((item, idx)=> (
               <Text
               style = {mainText}
               key={idx}>
                 {item}
               </Text>
             ))
           }
         </ScrollView>
        

    
    </View>

    )

  }

export default App;
