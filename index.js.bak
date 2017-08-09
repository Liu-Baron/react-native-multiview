/**
 * Created by wuyunan on 2017/5/19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    Text,
} from 'react-native';

export default class MoneyFormatText extends Component {

    constructor(props) {
        super(props);
    }

    props: {
        text: PropTypes.string,
        textColor: Text.propTypes.color,
        style: Text.propTypes.style,
        bigTextFontSize: Text.propTypes.number,
        smallTextFontSize: Text.propTypes.number,
        textStyle: Text.propTypes.style,
        status: PropTypes.string,
        hasRMB: PropTypes.bool,
        RMB: PropTypes.string,
    };

    static defaultProps = {
        textColor: '#E51111',
        text: '',
        status: "money",
        RMB: "￥",
        hasRMB: true,
    };

    render() {
        let text = this.props.text;
        if (this.props.status === "money") {
            let style = this.props.style;
            let RMB = this.props.RMB;
            let start = text.substring(0, 1);
            let strs = text.split('.');
            let moneyInteger = start === RMB || !/^([0-9]|[\-]|[+])+$/.test(start) ? text.substring(1, strs[0].length) : strs[0];
            let l = moneyInteger.length;
            let t = "";
            if (moneyInteger.indexOf(",") > 0 || l < 4) {
                t = moneyInteger;
            } else {
                for (let i = 0; i < l; i++) {
                    t += moneyInteger[i] + ((l - i - 1) % 3 === 0 && (i + 1) !== moneyInteger.length ? "," : "");
                }
            }
            let moneyDecimal = strs[1] ? strs[1] : "00";
            return (
                <Text style={[styles.smallText, style, {
                    color: this.props.textColor,
                    fontSize: this.props.smallTextFontSize ? this.props.smallTextFontSize : 12
                }]}>
                    {this.props.hasRMB ? RMB : ''}
                    <Text style={[styles.bigText, {
                        color: this.props.textColor,
                        fontSize: this.props.bigTextFontSize ? this.props.bigTextFontSize : 25
                    }]}>
                        {t}
                        <Text style={[styles.smallText, {
                            color: this.props.textColor,
                            fontSize: this.props.smallTextFontSize ? this.props.smallTextFontSize : 12
                        }]}>
                            {moneyDecimal.length === 0 ? "" : '.'.concat(moneyDecimal)}
                        </Text>
                    </Text>
                </Text>
            )

        } else {
            let textStyle = this.props.textStyle;
            return (
                <Text style={[textStyle]}>
                    {text}
                </Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    smallText: {
        fontSize: 12,
        color: "#E51111",
    },
    bigText: {
        fontSize: 25,
        color: "#E51111",
        fontFamily: 'HelveticaNeue',
    }
})