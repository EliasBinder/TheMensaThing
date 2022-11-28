import {Text, StyleSheet, TouchableOpacity} from "react-native";
import {scale} from "../util/ScaleUtil";
import {globalColors, globalStyles} from "../util/StyleUtil";

export function BigButton({text, onPress, style}: {text: string, onPress: () => void, style?: any}) {
    return (
        <TouchableOpacity style={[styles.button, globalStyles.dropShadow, style && style.hasOwnProperty('button') ? style.button : StyleSheet.create({})]} onPress={onPress}>
            <Text style={[styles.buttonText, style && style.hasOwnProperty('buttonText') ? style.buttonText : StyleSheet.create({})]}>{text}</Text>
        </TouchableOpacity>
    )
}

const calcForegroundColor = (backgroundColor: string) => {
    const color = backgroundColor.substring(4, backgroundColor.length - 1)
        .replace(/ /g, '')
        .split(',');
    const r = parseInt(color[0]);
    const g = parseInt(color[1]);
    const b = parseInt(color[2]);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? "#000" : "#fff";
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: globalColors.accent,
        width: scale(272),
        height: scale(57),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: calcForegroundColor(globalColors.accent),
        fontFamily: 'Poppins',
        fontSize: scale(30),
        textAlign: 'center',
    }
})
