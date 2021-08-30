/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        <View style={header}>
            <Text> {name} </Text>
        </View>
    );
};

export default Header;
