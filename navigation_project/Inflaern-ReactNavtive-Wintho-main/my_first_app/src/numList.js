/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity
 } from 'react-native';
 
 const styles = StyleSheet.create({
    numList:{
            backgroundColor: '#C1C7CF',
            alignItems: 'center',
            padding : 5,
            width: '100%',
            marginTop : 5
    }
 });
 
 const { numList } = styles;
 
 const NumList = function ({num, deleteNum}) {
   return (
    <> 
    {num.map((item,idx)=>(
    <TouchableOpacity style = {numList} key = {idx} onPress = {() => deleteNum(idx)}> 
        <Text>{item}</Text>
        </TouchableOpacity>))}
    </>
   );
 };
 
 export default NumList;
 