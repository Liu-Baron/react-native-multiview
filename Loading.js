import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';

import Common from './constants';

export default class Loading extends React.Component {

    constructor(props) {
        super(props);
    }

    props: {
        loadingHint: React.PropTypes.string,
        hintStyle: Text.propTypes.style,
        indicatorColor: ActivityIndicator.props.color,
        containerBgColor: View.propTypes.backgroundColor,
    };

    static defaultProps = {
        loadingHint: "加载中……",
        indicatorColor: "white",
        containerBgColor: 'rgba(102,102,102, 0.9)',
    };

    render() {
        let hasHint = this.props.loadingHint && (this.props.loadingHint !== "");
        return (
            <View style={[styles.loading, {backgroundColor: this.props.containerBgColor}]}>
                <ActivityIndicator color={this.props.indicatorColor}/>
                {hasHint ?
                    <Text style={[styles.loadingTitle, this.props.hintStyle]}>{this.props.loadingHint}</Text> : null}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    loading: {
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (Common.window.height - 90 - 70 - 80) / 2,
        left: (Common.window.width - 100) / 2,
    },
    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
});
