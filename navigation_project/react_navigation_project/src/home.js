import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

// const styles = StyleSheet.create({
// });

const HomeScreen = ({navigation}) => { // navigation 객체를 받아와
  return (
    <View style = {{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Text>'Home Screen'</Text>
        <Button
            title = "To home screen"
            onPress={()=>{
                navigation.navigate('User') // name값을 명시해준다, 해당 컴포넌트로 바뀐다 // 해당 메서드를 사용
            }}/>
    </View>
  );
};


export default HomeScreen;
// 네이게이션을 사용하기 위해선 모든 컴포넌트를 네비게이션 컴테이너로 감쌓야 한다