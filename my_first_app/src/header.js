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
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

const { header } = styles;

const Header = function ({ name }) {
  return (
    //   view 아무런 변화를 주지 않기 때문에 View에다가 스타일을 준다
    // <TouchableWithoutFeedback onPress={() => alert('안녕하세요')}>
   <TouchableOpacity style={header} onLongPress={() => alert('안녕하세요')}>
       {/* 여러 prpos들이 있으니 doc에서 확인하자 */}
      <View style={header}>
        <Text> {name} </Text>
      </View>
       </TouchableOpacity> 
    //   </TouchableWithoutFeedback>
  );
};

export default Header;
