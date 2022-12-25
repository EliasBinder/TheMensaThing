import {StatusBar, StyleSheet} from "react-native";
import {createIconSetFromIcoMoon} from "@expo/vector-icons";
import {scale} from "./ScaleUtil";

export const globalColors = {
    primary: '#040F21',
    secondary: '#081D40',
    tertiary: '#0E3067',
    accent: '#28D5B4',
}

export const Icon = createIconSetFromIcoMoon(
    require('../assets/icons/selection.json'),
    'IcoMoon',
    'icomoon.ttf'
);

export const globalStyles = StyleSheet.create({
    safeAreaView: {
        marginTop: StatusBar.currentHeight
    },
    container: {
        backgroundColor: globalColors.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header1: {
        color: '#fff',
        fontSize: 40,
        fontFamily: 'Poppins_SemiBold',
    },
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .8,
        shadowRadius: 15,
        elevation: 15,
    },
    box: {
        backgroundColor: globalColors.secondary,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .8,
        shadowRadius: 15,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        backgroundColor: globalColors.tertiary,
        borderRadius: 15,
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 25,
        padding: 10,
        width: '100%'
    },
    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        paddingHorizontal: scale(30),
    }
});
