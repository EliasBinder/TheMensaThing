import {Text, StyleSheet, TouchableOpacity} from "react-native";
import {scale} from "../util/ScaleUtil";
import {globalColors, globalStyles} from "../util/StyleUtil";

export function Button({text, onPress, style}: {text: string, onPress: () => void, style?: any}) {
    const [buttonContainerStyle, buttonTextStyle] = buildStyles(style)

    return (
        <TouchableOpacity style={[buttonContainerStyle, globalStyles.dropShadow, style && style.hasOwnProperty('button') ? style.button : StyleSheet.create({})]} onPress={onPress}>
            <Text style={[buttonTextStyle, style && style.hasOwnProperty('buttonText') ? style.buttonText : StyleSheet.create({})]}>{text}</Text>
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

const buildStyles = (style: any) => {
    const buttonContainerStyle = {
        backgroundColor: style.backgroundColor || globalColors.accent,
        width: style.width || scale(272),
        height: style.height || scale(67),
        borderRadius: style.borderRadius || 15,
        alignItems: style.alignItems || 'center',
        justifyContent: style.justifyContent || 'center',
        ...style
    }

    const buttonTextStyle = StyleSheet.create({
        color: style.color || calcForegroundColor(globalColors.accent),
        fontFamily: style.fontFamily || 'Poppins',
        fontSize: style.fontSize || scale(30),
        textAlign: style.textAlign || 'center'
    });

    return [buttonContainerStyle, buttonTextStyle];
}
