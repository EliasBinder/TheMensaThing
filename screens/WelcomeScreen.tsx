import React, {Component, useEffect} from "react";
import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {scale} from "../util/ScaleUtil";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from "expo-status-bar";

const animatedGif = require('../assets/images/welcomeScreenAnimation.gif');

const WelcomeScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const [isFirstTime, setIsFirstTime] = React.useState(true);

    useEffect(() => {
        AsyncStorage.getItem('isFirstTime').then((value: string | null) => {
            if (value === null) {
                AsyncStorage.setItem('isFirstTime', 'false');
                setIsFirstTime(true);
            } else {
                setIsFirstTime(true); //TODO set false
            }
        });
    });

    if (!isFirstTime)
        navigation.navigate('BottomNav');

    // @ts-ignore
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#040F21'} style={"light"}/>
            <View style={styles.container}>
                <Image source={animatedGif} style={styles.image} />
                <View style={styles.titleView}>
                    <Text style={[styles.title, styles.titleWhite]}>The</Text>
                    <Text style={[styles.title, styles.titleGreen]}>Mensa</Text>
                    <Text style={[styles.title, styles.titleWhite]}>Thing</Text>
                </View>
                <Text style={styles.subtitle}>provides you a more pleasant stay at our UniMensa and UniBar</Text>
                <Pressable style={styles.button} onPress={() => {
                    navigation.navigate('BottomNav');
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'BottomNav'}],
                    });
                }}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </Pressable>
            </View>
        </SafeAreaView>
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
        paddingTop: scale(60)
    },
    title: {
        fontSize: scale(36),
        fontFamily: 'Poppins_Bold',
    },
    titleWhite: {
        color: '#FFFFFF'
    },
    titleGreen: {
        color: '#28D5B4'
    },
    image: {
        width: scale(350),
        height: scale(350)
    },
    subtitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: scale(20),
        paddingTop: scale(50),
        paddingLeft: scale(50),
        paddingRight: scale(50),
        flex: 1,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#28D5B4',
        width: scale(272),
        height: scale(57),
        borderRadius: 15,
        marginBottom: scale(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: scale(30),
        textAlign: 'center',
    }
});

export default WelcomeScreen
