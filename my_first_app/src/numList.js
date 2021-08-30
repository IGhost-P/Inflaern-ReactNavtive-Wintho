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
   StyleSheet
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
 
 const NumList = function ({num}) {
   return (
    <>
    {num.map((item,idx)=>(
    <View style = {numList} key = {idx}> 
        <Text>{item}</Text>
    </View>))}
    </>
   );
 };
 
 export default NumList;
 