import {Dimensions, PixelRatio, Platform} from "react-native";

const {
    width: deviceWidth
} = Dimensions.get('window');

export const scale = (whatToScale: number): number => {
    const newSize = deviceWidth > 450 ? whatToScale : whatToScale * (deviceWidth / 450);
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
