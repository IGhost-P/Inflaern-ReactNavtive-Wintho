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

const UserScreen = ({navigation, route}) => {
    // headerStyle = () => {
    //     navigation.setOptions
    //         ({ headerStyle: {backgroundColor: 'blue'}, headerTintColor: 'green'}
    //     )
    // }
    // 보내준 route를 구조분해 할당
    let { userIndex, userName, userLastName } = route.params;
    userIndex || undefined;
    userName || undefined;
    userLastName || undefined;
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

            <Text>User idx: {JSON.stringify(userIndex)}</Text>
            <Text>User Name: {JSON.stringify(userName)}</Text>
            <Text>User LastName: {JSON.stringify(userLastName)}</Text>
    </View>
  );
};


export default UserScreen;
// 네이게이션을 사용하기 위해선 모든 컴포넌트를 네비게이션 컴테이너로 감쌓야 한다