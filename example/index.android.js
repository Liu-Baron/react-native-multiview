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

import {MultiView} from "react-native-multiview";
import {PageStatus} from "react-native-multiview";

export default class example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "error",
        }
    }

    componentDidMount() {
        let that = this;
        setTimeout(() => {
            that.setState({
                status: PageStatus.empty,
            });
            setTimeout(() => {
                that.setState({
                    status: PageStatus.content,
                });
                setTimeout(() => {
                    that.setState({
                        status: PageStatus.loading,
                    });
                    setTimeout(() => {
                        that.setState({
                            status: PageStatus.error,
                        })
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }

    render() {

        let that = this;
        return (
            <MultiView status={that.state.status} emptyBgColor="white" errorBgColor="white" emptyText="你还没有添加商品呦"
                       errorText="网络错误">
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={styles.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Shake or press menu button for dev menu
                    </Text>
                </View>
            </MultiView>
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
