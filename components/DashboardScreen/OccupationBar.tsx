import {View, StyleSheet} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";

interface propType {
    occupation: string,
    style?: any
}

export function OccupationBar({occupation, style=StyleSheet.create({})}: propType) {
    return (
        <View style={[styles.barOuter, globalStyles.dropShadow, style]}>
            <View style={[styles.barInner, {width: occupation}]}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barOuter: {
        flex: 1,
        height: 10,
        backgroundColor: globalColors.primary,
        borderRadius: 5,
    },
    barInner: {
        backgroundColor: globalColors.accent,
        height: 10,
        borderRadius: 5
    }
})
