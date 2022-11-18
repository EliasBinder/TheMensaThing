import {StatusBar, StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    safeAreaView: {
        marginTop: StatusBar.currentHeight
    },
    container: {
        backgroundColor: '#040F21',
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
    }
});

export const globalColors = {
    primary: '#040F21',
    secondary: '#081D40',
    tertiary: '#0E3067',
    accent: '#28D5B4',
}
