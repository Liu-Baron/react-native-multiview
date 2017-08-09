import {Dimensions, Platform} from 'react-native';
import Color from "./color"

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

const pageStatus = {
    error: 'error',
    content: 'content',
    empty: 'empty',
    init: 'init',
    loading: 'loading'
};

export default {
    window: window,
    isIOS: Platform.OS === 'ios',
    Color: Color,
    PageStatus:pageStatus,
}
