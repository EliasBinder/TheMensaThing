import React, {Component, useEffect} from "react";
import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {scale} from "../util/ScaleUtil";
import {StatusBar} from "expo-status-bar";
import {BigButton} from "../components/BigButton";
import {globalColors, globalStyles} from "../util/StyleUtil";
import AsyncStorage from "@react-native-async-storage/async-storage";

const animatedGif = require('../assets/images/welcomeScreenAnimation.gif');

const WelcomeScreen = ({navigation, route}: {navigation: any, route: any}) => {

    useEffect(() => {
        AsyncStorage.getItem('isFirstTime').then((value: string | null) => {
            if (value === null) {
                AsyncStorage.setItem('isFirstTime', 'false');
            } else {
                navigation.navigate('BottomNav');
            }
        });
    }, [navigation]);

    // @ts-ignore
    return (
        <SafeAreaView style={[styles.container, globalStyles.safeAreaView]}>
            <StatusBar backgroundColor={globalColors.primary} style={"light"}/>
            <View style={styles.container}>
                <Image source={animatedGif} style={styles.image} />
                <View style={styles.titleView}>
                    <Text style={[styles.title, styles.titleWhite]}>The</Text>
                    <Text style={[styles.title, styles.titleGreen]}>Mensa</Text>
                    <Text style={[styles.title, styles.titleWhite]}>Thing</Text>
                </View>
                <Text style={styles.subtitle}>provides you a more pleasant stay at our UniMensa and UniBar</Text>
                <BigButton text={'Get Started'} onPress={() => {
                    navigation.navigate('BottomNav');
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'BottomNav'}],
                    });
                }} style={styles}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.primary,
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
        color: globalColors.accent
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
        marginBottom: scale(50)
    }
});

export default WelcomeScreen
