# react-native-multiview
This is a component that contains more than one common layer,Android and IOS are also available.

## Installation
npm install -save react-native-multiview

## Usage example


```
import {MultiView} from "react-native-multiview";


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

[https://github.com/wslcsok/react-native-multiview/issues](https://github.com/wslcsok/react-native-multiview/issues)
