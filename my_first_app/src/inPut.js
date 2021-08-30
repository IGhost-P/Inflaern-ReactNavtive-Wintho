/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import { View, StyleSheet, TextInput } from 'react-native';

 const styles = StyleSheet.create({
    inPut: {
        width : '100%',
        backgroundColor: '#cecece',
        marginTop : 20,
        fontSize: 25,
        padding:10
    },
    mainView: {
        width : '100%',
    }
 });
 
 const { inPut, mainView } = styles;
 
 const Input = function () {
    const [state, setState] = useState({
        myTextInput : ''
    });
 
   const { myTextInput} = state;
 
const onChangeInput = (e) => {
    setState({myTextInput: e})
}
  
   return (
       <View style={mainView}>
        <TextInput 
            value = {myTextInput}
            style ={inPut}
            onChangeText = {onChangeInput}
        />
        </View>
   );
 };
 
 export default Input;
 