/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Picker} from '@react-native-picker/picker';
 import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   TouchableWithoutFeedback,
 } from 'react-native';
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center '
   },
 });
 
 const { header } = styles;
 
 const PickerComponent = function ({ name }) {
   return (
    <View style = {container}>
        <Picker
        style={{height: 50, width: 250}}>

        </Picker>
    </View>
   );
 };
 
 export default PickerComponent;
 