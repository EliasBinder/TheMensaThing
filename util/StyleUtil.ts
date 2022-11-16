import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
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
