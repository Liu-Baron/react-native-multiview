# React-Native-MoneyFormatText
这是一个对金额进行格式化的React-native组件，兼容ios和android

## Installation
npm install -save react-native-moneyformattext

## Usage example


```
import MoneyFormatText from "react-native-moneyformattext";

<MoneyFormatText text="1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$"/>
<MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true}/>
<MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={false} RMB="$"/>
<MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$" textColor="red"/>
<MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$" textColor="black"/>
<MoneyFormatText text="￥1200000" bigTextFontSize={20} smallTextFontSize={12} hasRMB={true} RMB="$"/>

```

## Props

Prop             | Type   | Optional | Default   | Description
---------------  | ------ | -------- | --------- | -----------
text             | string | Yes      | ""        | content of this component
textColor        | color  | Yes      | '#E51111' | color of text
style            | style  | Yes      |           | style for this component
bigTextFontSize  | number | Yes      |     25    | big fontSize for one of these parts in text
smallTextFontSize| number | Yes      |     12    | small fontSize for one of these parts in text
textStyle        | style  | Yes      |           | style for text when status!="money" (just normal text)
status           | string | Yes      |  "money"  | if status="money" show formatted money,else show normal text
hasRMB           | bool   | Yes      |   true    | if true,will show RMB
RMB              | string | Yes      |    "￥"   | the symbol of money

## To Do

[https://github.com/wslcsok/React-Native-MoneyFormatText/issues](https://github.com/wslcsok/React-Native-MoneyFormatText/issues)
