# react-native-multiview
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/react-native-multiview)

This is a component that contains more than one common layer,Android and IOS are also available.


![multiview preview](https://github.com/wslcsok/react-native-multiview/blob/master/example.gif)


## Installation
npm install -save react-native-multiview

## Usage example


```
import {MultiView} from "react-native-multiview";
import {PageStatus} from "react-native-multiview";

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
                    <MoneyFormatText text="1200000" bigTextFontSize={30} smallTextFontSize={20} hasRMB={true} RMB="$"/>
                    <MoneyFormatText text="￥1200000" bigTextFontSize={30} smallTextFontSize={20} hasRMB={true}/>
                    <MoneyFormatText text="￥1200000" bigTextFontSize={30} smallTextFontSize={12} hasRMB={false}
                                     RMB="$"/>
                    <MoneyFormatText text="$1200000" bigTextFontSize={30} smallTextFontSize={15} hasRMB={true} RMB="￥"
                                     textColor="red"/>
                    <MoneyFormatText text="￥1200000" bigTextFontSize={30} smallTextFontSize={20} hasRMB={true} RMB="￥"
                                     textColor="black"/>
                    <MoneyFormatText text="$1200000" bigTextFontSize={30} smallTextFontSize={25} hasRMB={true} RMB="￥"/>
                </View>
            </MultiView>
        );
    }


```

## Props

Prop                    | Type   | Optional |     Default    | Description
------------------------| ------ | -------- |----------------| -----------
status                      | string | Yes      |PageStatus.content| status determines the current display of that page,which includes{PageStatus.error,PageStatus.empty,PageStatus.content,PageStatus.init,PageStatus.loading}five status.   
onEmptyPress                | func   | Yes      |                    | Click event of empty page button
onErrorPress                | func   | Yes      |                    | Click event of error page button
emptyImgSource              | source | Yes      |                    | Image of empty page show
errorImgSource              | source | Yes      |                    | Image of error page show
emptyText                   | string | Yes      |         ""         | Text of empty page desc
errorText                   | string | Yes      |         ""         | Text of error page desc
emptyBtnText                | string | Yes      |         ""         | Text of empty page button,Display when it is not empty,Default does not display
errorBtnText                | string | Yes      |         ""         | Text of error page button,Display when it is not empty,Default does not display
emptyTextStyle              | style  | Yes      |                    | The style of empty page text
errorTextStyle              | style  | Yes      |                    | The style of error page text
emptyButtonStyle            | style  | Yes      |                    | The style of empty page button
errorButtonStyle            | style  | Yes      |                    | The style of error page button
emptyBgColor                | color  | Yes      |                    | The backgroundcolor of empty page
errorBgColor                | color  | Yes      |                    | The backgroundcolor of error page
initHint                    | string | Yes      |                    | Hint of init page ActivityIndicator
loadingHint                 | string | Yes      |                    | Hint of loading page ActivityIndicator
initHintStyle               | style  | Yes      |                    | The style of init page initHint
loadingHintStyle            | style  | Yes      |                    | The style of loading page loadingHint
initIndicatorColor          | color  | Yes      |                    | The color of init page ActivityIndicator
loadingIndicatorColor       | color  | Yes      |                    | The color of loading page ActivityIndicator
initContainerBgColor        | color  | Yes      |                    | The backgroundcolor init page ActivityIndicator container
initContainerBgColor        | color  | Yes      |                    | The backgroundcolor loading page ActivityIndicator container


## To Do

[https://github.com/wslcsok/react-native-multiview/issues](https://github.com/wslcsok/react-native-multiview/issues)
