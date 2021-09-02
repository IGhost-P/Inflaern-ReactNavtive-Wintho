import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// 네비게이션 구조와 컴포넌트를 관리, 이걸로 감싸져야한다 
// 스크린, 네비게이션을 리턴함

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // 스택이 좀 변경도미
import HomeScreen from './src/home'
import UserScreen from './src/user';
// const styles = StyleSheet.create({
// });

const Stack = createNativeStackNavigator(); // screen 프로퍼티를 리턴할때 screen 컴포넌트를 명시하는데, nevigation이란 props을 각각의 screen 의 coponent에 넘겨주니, HomeScreen에서는 navigation을 받아와 속해 있는 메서드를 사용할수있는것


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ={"User"} screenOptions= {{ headerStyle: {backgroundColor: 'yellow'}, headerTintColor: 'red'}}>
      <Stack.Screen name="Home" component={HomeScreen} options ={{title: "HomeScreen"}}/>
        <Stack.Screen name="User" component={UserScreen} initialParams={{userIndex : 50,
                  userName: 'Glidon',
                  userLastName: 'Go'}}
                  options ={{title: "UserScreen"}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
// 네이게이션을 사용하기 위해선 모든 컴포넌트를 네비게이션 컴테이너로 감쌓야 한다
