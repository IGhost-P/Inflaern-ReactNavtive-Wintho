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

const HomeScreen = ({navigation}) => { 
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
                navigation.navigate('User',{ // User라는 스크리으로 보내는 파라미터임
                  userIndex : 100,
                  userName: 'Glidon',
                  userLastName: 'Hong'
                }) 
            }}/>
            <Button
            title = "Change the title"
            onPress={()=>navigation.setOptions({title: "Changed!", headerStyle: {backgroundColor: 'pink'}, headerTintColor: 'red'})}
            />
    </View>
  );
};


export default HomeScreen;
// 네이게이션을 사용하기 위해선 모든 컴포넌트를 네비게이션 컴테이너로 감쌓야 한다