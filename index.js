/**
 * Created by Lcs on 2017/5/19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Dimensions,
    ViewPropTypes,
    ActivityIndicator,
} from 'react-native';
import Loading from "./Loading";
import {ErrorView} from "./ErrorView";
import {EmptyView} from "./EmptyView";
import Common from './constants';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

export class MultiView extends Component {

    constructor(props) {
        super(props);
    }

    props: {
        status: PropTypes.string,
        children: any,
        onEmptyPress: () => void,
        onErrorPress: () => void,
        emptyImgSource: Image.propTypes.source,
        errorImgSource: Image.propTypes.source,
        emptyText: React.PropTypes.string,
        errorText: React.PropTypes.string,
        emptyBtnText: React.PropTypes.string,
        errorBtnText: React.PropTypes.string,
        emptyTextStyle: Text.propTypes.style,
        errorTextStyle: Text.propTypes.style,
        emptyButtonStyle: ViewPropTypes.style,
        errorButtonStyle: ViewPropTypes.style,
        emptyBgColor: View.propTypes.backgroundColor,
        errorBgColor: View.propTypes.backgroundColor,
        initHint: React.PropTypes.string,
        loadingHint: React.PropTypes.string,
        initHintStyle: Text.propTypes.style,
        loadingHintStyle: Text.propTypes.style,
        initIndicatorColor: ActivityIndicator.props.color,
        loadingIndicatorColor: ActivityIndicator.props.color,
        initContainerBgColor: View.propTypes.backgroundColor,
        loadingContainerBgColor: View.propTypes.backgroundColor,
    };

    _onEmptyPress = () => {
        this.props.onEmptyPress();
    };

    _onErrorPress = () => {
        this.props.onErrorPress();
    };

    static defaultProps = {
        status: Common.PageStatus.content,
    };

    render() {
        // 第一次加载等待的view
        if (this.props.status === Common.PageStatus.init) {
            return this.renderLoadingView();
        } else if (this.props.status === Common.PageStatus.empty) {
            //请求为空的view
            return this.renderEmptyView();
        } else if (this.props.status === Common.PageStatus.error) {
            //请求失败view
            return this.renderErrorView();
        }
        //加载数据
        return this.renderData();
    }


    //加载等待的view
    renderLoadingView() {
        return (
            <Loading
                hintStyle={this.props.initHintStyle}
                indicatorColor={this.props.initIndicatorColor}
                containerBgColor={this.props.initContainerBgColor}
                loadingHint={this.props.initHint}/>
        );
    }

    //加载失败view
    renderErrorView() {
        return (
            <ErrorView
                title={this.props.errorText}
                imgSource={this.props.errorImgSource}
                btnText={this.props.errorBtnText}
                textStyle={this.props.errorTextStyle}
                buttonStyle={this.props.errorButtonStyle}
                backgroundColor={this.props.errorBgColor}
                onPress={() => {
                    this._onErrorPress();
                }}/>
        );
    }

    //加载失败view
    renderEmptyView() {
        return (
            <EmptyView
                title={this.props.emptyText}
                imgSource={this.props.emptyImgSource}
                btnText={this.props.emptyBtnText}
                textStyle={this.props.emptyTextStyle}
                buttonStyle={this.props.emptyButtonStyle}
                backgroundColor={this.props.emptyBgColor}
                onPress={() => {
                    this._onEmptyPress();
                }}/>
        );
    }


    renderData() {
        return (
            <View style={{flex: 1,}} {...this.props}>
                <View style={styles.position_container} {...this.props}>
                    {this.props.children}
                </View>
                {this.props.status === Common.PageStatus.loading ? <View style={styles.just_loading_container}>
                    <Loading
                        hintStyle={this.props.loadingHintStyle}
                        indicatorColor={this.props.loadingIndicatorColor}
                        containerBgColor={this.props.loadingContainerBgColor}
                        loadingHint={this.props.loadingHint}
                    />
                </View> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    position_container: {
        flex: 1,
        backgroundColor: '#F5F6F7',
        flexDirection: 'column',
    },

    just_loading_container: {
        width: window.width,
        height: window.height - 40,
        backgroundColor: "transparent",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
    },

});