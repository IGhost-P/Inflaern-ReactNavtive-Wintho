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
   Button
 } from 'react-native';
 
 const styles = StyleSheet.create({
    generator:{
            backgroundColor: '#D197CF',
            alignItems: 'center',
            padding : 5,
            width: '100%',
    }
 });
 
 const { generator } = styles;
 
 const Generator = function ({add}) {
   return (
       // 버튼 스타일을 감싸는 View에 줘야한다
    <View style = {generator}> 
        <Button
            title = " Add number"
            onPress = {()=> add()}
        />
    </View>
   );
 };
 
 export default Generator;
 