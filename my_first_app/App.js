/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/header';

const styles = StyleSheet.create({
  mainView: {
    flex: 1, // 화면을 채우는 컴포넌트들 간에 차지하는 비율
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center', // 수평 정령
    justifyContent: 'center',
  },
});

const { mainView } = styles;

const App = function () {
  const [state, setState] = useState({
    appName: 'My First App',
  });

  const { appName } = state;

  return (
    <View style={mainView}>
      <Header name={appName} />
    </View>
  );
};

export default App;
