import React, {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native'

var PlatformInfo = {
    sizeObj: Dimensions.get('window'),
    pixels: 2,
    getSize: ()=>Dimensions.get('window'),
    width: ()=> {
        return PlatformInfo.sizeObj.width;
    },
    height: ()=> {
        return PlatformInfo.sizeObj.height - (Platform.OS === "android" ? StatusBar.currentHeight : 0);
    },
    pixel: (px)=> {
        if (!PlatformInfo.pixels) {
            PlatformInfo.pixels = PixelRatio.get();
        }
        return px / PlatformInfo.pixels;
    }
};

var CSS = {
    pixel: PlatformInfo.pixel,
    width: PlatformInfo.width,
    height: PlatformInfo.height
};

export {CSS, PlatformInfo}