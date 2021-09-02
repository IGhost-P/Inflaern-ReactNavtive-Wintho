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

const UserScreen = ({navigation}) => {
  return (
    <View style = {{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>'User Screen'</Text>
        <Button
            title = "To user screen"
            onPress={()=>{
                navigation.navigate('Home') // name값을 명시해준다
            }}/>
    </View>
  );
};


export default UserScreen;
// 네이게이션을 사용하기 위해선 모든 컴포넌트를 네비게이션 컴테이너로 감쌓야 한다