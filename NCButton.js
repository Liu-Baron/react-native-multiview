'use strict';

import React from 'react';

import {
    Text,
    TouchableOpacity,
    ViewPropTypes
} from 'react-native';

import Common from './constants'

class Button extends React.Component {
    props: {
        onPress?: void,
        disabled?: false,

    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.buttonStyle}
                activeOpacity={0.8}>
                <Text style={this.props.textStyle}>
                    {
                        this.props.title
                    }
                </Text>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    onPress: React.PropTypes.func,
    title: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    buttonStyle: ViewPropTypes.style,
    disabled: React.PropTypes.bool,
};

Button.defaultProps = {
    buttonStyle: {
        borderColor: Common.Color.text_import9,
        borderRadius: 5,
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        paddingBottom: 6,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Common.Color.white,
    },
    textStyle: {


        color: Common.Color.text_import
    },
    disabled: false,
}


export default Button;

