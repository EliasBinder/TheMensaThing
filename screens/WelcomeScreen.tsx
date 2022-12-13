import React, {Component, useEffect, useState} from "react";
import {Button, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {scale} from "../util/ScaleUtil";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from "expo-status-bar";
import {BigButton} from "../components/BigButton";
import {globalColors, globalStyles} from "../util/StyleUtil";
import * as Location from "expo-location";
import {LocationGeofencingRegionState} from "expo-location";

const animatedGif = require('../assets/images/welcomeScreenAnimation.gif');
const LOCATION_TASK = 'location-task';
const LOCATION_TASK_FENCING = 'geofencing-location-task';
const regions = [
    {
        identifier: 'Mensa BZ',
        latitude: 46.497816,
        longitude: 11.349857,
        radius: 10,
        notifyOnEnter: true,
        notifyOnExit: true,
        state: LocationGeofencingRegionState.Unknown
    },
    {
        identifier: 'Mensa BX',
        latitude: 46.7150,
        longitude: 11.6530,
        radius: 10,
        notifyOnEnter: true,
        notifyOnExit: true,
        state: LocationGeofencingRegionState.Unknown
    },
]

const WelcomeScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const [isFirstTime, setIsFirstTime] = React.useState(true);

    const [location, setLocation] = useState({} as Location.LocationObject);
    const [locationUpdate, setLocationUpdate] = useState('default');
    const [locationUpdateFencing, setLocationUpdateFencing] = useState('default fencing');

    useEffect(() => {
        AsyncStorage.getItem('isFirstTime').then((value: string | null) => {
            if (value === null) {
                AsyncStorage.setItem('isFirstTime', 'false');
                setIsFirstTime(true);
            } else {
                setIsFirstTime(true); //TODO set false
            }
        });
        (async () => {
            await Location.requestBackgroundPermissionsAsync()
            await Location.requestForegroundPermissionsAsync()
            //startBackgroundUpdate().catch(e => console.log('Error executing the background location tasks', e));
        })();
    });

    const startBackgroundUpdate = async () => {
        // Don't track position if permission is not granted
        const { granted } = await Location.getBackgroundPermissionsAsync()
        if (!granted) {
            setLocationUpdate("location tracking denied")
            return
        }else{
            setLocationUpdate("location tracking granted")
            //setLocationUpdateFencing("location tracking granted")
        }

        if (await Location.hasStartedGeofencingAsync(LOCATION_TASK_FENCING)) {
            setLocationUpdateFencing("Already started")
            return
        }

        await Location.startLocationUpdatesAsync(LOCATION_TASK, {
            // For better logs, we set the accuracy to the most sensitive option
            accuracy: Location.Accuracy.BestForNavigation,
            // Make sure to enable this notification if you want to consistently track in the background
            showsBackgroundLocationIndicator: true,
            foregroundService: {
                notificationTitle: "Location",
                notificationBody: "Location tracking in background",
                notificationColor: "#fff",
            },
        })

        await Location.startGeofencingAsync(LOCATION_TASK_FENCING, regions)
            .then(() => setLocationUpdateFencing("started geofencing"))
    }

    if (!isFirstTime)
        navigation.navigate('BottomNav');

    // @ts-ignore
    return (
        /*<SafeAreaView style={[styles.container, globalStyles.safeAreaView]}>
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
        </SafeAreaView>*/
        <View style={styles.container}>
            <Text style={styles.textbox}>{JSON.stringify(location)}</Text>
            <Text style={styles.textbox}>{locationUpdate}</Text>
            <Text style={styles.textbox}>{locationUpdateFencing}</Text>
            <Button title={'startBackground'} onPress={() => {startBackgroundUpdate().then() }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbox: {
        borderColor: 'gray',
        color: 'white',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
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
