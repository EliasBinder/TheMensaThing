import React, {useEffect, useState} from "react";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {scale} from "../util/ScaleUtil";
import {StatusBar} from "expo-status-bar";
import {Button} from "../components/Button";
import {globalColors, globalStyles} from "../util/StyleUtil";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from "expo-location";
import {mensaLocations} from "../util/LocationUtil";

const animatedGif = require('../assets/images/welcomeScreenAnimation.gif');
const LOCATION_TASK_FENCING = 'geofencing-location-task';

const WelcomeScreen = ({navigation}: {navigation: any}) => {


    useEffect(() => {
        AsyncStorage.getItem('isFirstTime').then((value: string | null) => {
            if (value === null) {
                AsyncStorage.setItem('isFirstTime', 'false');
            } else {
                navigation.navigate('BottomNav');
            }
        });
        (async () => {
            const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync().catch();
            if (foregroundStatus === 'granted') {
                const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync().catch();
                if (backgroundStatus === 'granted') {
                    startBackgroundUpdate().then(() => console.log('started background tasks')).catch(e => console.log('Error executing the background location tasks', e));
                }
            }
        })();
    }, [navigation]);

    const startBackgroundUpdate = async () => {
        // Don't track position if permission is not granted
        const { granted } = await Location.getBackgroundPermissionsAsync()
        if (!granted) {
            console.log("location tracking denied")
            return
        }else{
            console.log("location tracking granted")
        }

        if (await Location.hasStartedGeofencingAsync(LOCATION_TASK_FENCING)) {
            console.log("Already started geofencing")
            return
        }

        await Location.startGeofencingAsync(LOCATION_TASK_FENCING, mensaLocations)
            .then(() => console.log("started geofencing with locations"))
    }

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
                <Button text={'Get Started'} onPress={() => {
                    navigation.navigate('BottomNav');
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'BottomNav'}],
                    });
                }} style={styles.button}/>
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
