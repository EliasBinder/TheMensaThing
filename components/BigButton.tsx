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
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: scale(30),
        textAlign: 'center',
    }
})
