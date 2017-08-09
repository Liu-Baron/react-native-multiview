/**
 * Created by wuyunan on 2017/5/19.
 */
import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ViewPropTypes,
} from 'react-native';
import Buttom from "./NCButton";
import Common from './constants';

export class EmptyView extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    props: {
        onPress: () => void,
    };
    _onPress = () => {
        this.props.onPress();
    };

    render() {
        let hasTx = this.props.title & (this.props.title !== "");
        let hasBtn = this.props.btnText && this.props.btnText !== "";
        return (
            <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                <Image resizeMode='stretch' source={this.props.imgSource} style={{height: 120, width: 120,}}/>
                {hasTx ? <Text style={[styles.text_desc, this.props.textStyle]}>{this.props.title}</Text> : null}
                {hasBtn ?
                    <Buttom buttonStyle={[styles.btnContainer, this.props.buttonStyle]}
                            onPress={() => this._onPress()}
                            title={this.props.btnText}
                            textStyle={styles.btn_text_style}/> : null
                }
            </View>
        );
    }
}

EmptyView.propTypes = {
    onPress: React.PropTypes.func,
    imgSource: Image.propTypes.source,
    title: React.PropTypes.string,
    btnText: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    buttonStyle: ViewPropTypes.style,
    backgroundColor: View.propTypes.backgroundColor,
};

EmptyView.defaultProps = {
    imgSource: require("./ic_contractlist_empty.png"),
    backgroundColor: Common.Color.background_native,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Common.window.height / 5,
        alignItems: "center",
    },
    btnContainer: {
        height: 39,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        borderColor: Common.Color.text_red,
        borderRadius: 3,
        borderWidth: 0.6,
    },
    text_desc: {
        fontSize: 14,
        color: Common.Color.text_import9,
        marginBottom: 25,
    },
    btn_text_style: {
        fontSize: 17,
        color: Common.Color.text_red,
    },

});