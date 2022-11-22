import {View, StyleSheet} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";

export function OccupationBar({occupation, style=StyleSheet.create({})}: {occupation: string, style?: any}) {
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
