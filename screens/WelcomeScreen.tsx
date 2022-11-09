import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

const animatedGif = require('../assets/images/welcomeScreenAnimation.gif');

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={animatedGif} style={styles.image} />
            <View style={styles.titleView}>
                <Text style={[styles.title, styles.titleWhite]}>The</Text>
                <Text style={[styles.title, styles.titleGreen]}>Mensa</Text>
                <Text style={[styles.title, styles.titleWhite]}>Thing</Text>
            </View>
            <Text style={styles.subtitle}>provides you a more pleasant stay at our UniMensa and UniBar</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#040F21',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleView: {
        flexDirection: 'row',
        paddingTop: 60
    },
    title: {
        fontSize: 36,
        fontFamily: 'Poppins_Bold',
    },
    titleWhite: {
        color: '#FFFFFF'
    },
    titleGreen: {
        color: '#28D5B4'
    },
    image: {
        width: 350,
        height: 350
    },
    subtitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 20,
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
        flex: 1,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#28D5B4',
        width: 272,
        height: 57,
        borderRadius: 15,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 30,
        textAlign: 'center',
    }
});

export default WelcomeScreen
