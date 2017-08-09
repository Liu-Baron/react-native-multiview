/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MoneyFormatText from "react-native-moneyformattext";
export default class example extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MoneyFormatText text="1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$"/>
                <MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true}/>
                <MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={false} RMB="$"/>
                <MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$" textColor="red"/>
                <MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$" textColor="black"/>
                <MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('example', () => example);
