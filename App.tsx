import {Button, StyleSheet, Text, View} from 'react-native';
import {useFonts} from 'expo-font';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {initializeApp} from 'firebase/app';
import {getAuth, OAuthProvider} from 'firebase/auth';
import {AuthUtilType} from "./util/AuthUtil";
import * as Location from 'expo-location';
import {GeofencingEventType, LocationGeofencingRegionState} from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import WelcomeScreen from "./screens/WelcomeScreen";
import BottomNavScreen from "./screens/BottomNavScreen";
import { NavigationContainer } from '@react-navigation/native';

const firebaseConfig = {
  apiKey: "AIzaSyBfipLKf2Zo4KZ8D_6GsHdzslsaZB2gPNE",
  authDomain: "unibz-mensapp.firebaseapp.com",
  projectId: "unibz-mensapp",
  storageBucket: "unibz-mensapp.appspot.com",
  messagingSenderId: "149619072455",
  appId: "1:149619072455:web:a2ccf007c3b099d61a8de2"
};
const firebaseAuthProvider = new OAuthProvider('microsoft.com');
firebaseAuthProvider.setCustomParameters({
  prompt: 'consent',
  tenant: '92513267-03e3-401a-80d4-c58ed6674e3b'
});
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
const LOCATION_TASK = 'location-task';
const LOCATION_TASK_FENCING = 'geofencing-location-task';

// @ts-ignore
TaskManager.defineTask(LOCATION_TASK_FENCING, ({ data: {eventType, region}, error }) => {
    if (error) {
        console.log("error: " + error);
        return;
    }
    if (eventType === GeofencingEventType.Enter) {
        console.log("You've entered region:" + JSON.stringify(region));
        /*fetch('https://api.github.com/users/defunkt', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                user: 'test@unibz.it', //auth.username,
                entered: true,
                inLocation: region.identifier,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Showing response message coming from server
                console.warn(responseJson);
            })
            .catch((error) => {
                //display error message
                console.warn(error);
            });*/
    } else if (eventType === GeofencingEventType.Exit) {
        console.log("You've left region:" + JSON.stringify(region));
        /*fetch('https://api.github.com/users/defunkt', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                user: 'test@unibz.it', //auth.username,
                entered: false,
                inLocation: region.identifier,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Showing response message coming from server
                console.warn(responseJson);
            })
            .catch((error) => {
                //display error message
                console.warn(error);
            });*/
    } else{
        console.log('none of the events triggered' + JSON.stringify(region));
    }
});

// @ts-ignore
TaskManager.defineTask(LOCATION_TASK, ({ data: { locations }, error }) => {
    if (error) {
        console.log("error: " + error);
        return;
    }
    if(locations){
        console.log("New regions: " + JSON.stringify(locations));
        console.log(locations);
    }
});

export default function App() {
  const [auth, setAuth] = React.useState(null as (AuthUtilType | null));

  const [loaded] = useFonts({
    Poppins_BlackItalic: require('./assets/fonts/Poppins-BlackItalic.ttf'),
    Poppins_BoldItalic: require('./assets/fonts/Poppins-BoldItalic.ttf'),
    Poppins_Bold: require('./assets/fonts/Poppins-Bold.ttf'),
    Poppins_ExtraBoldItalic: require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    Poppins_ExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    Poppins_ExtraLightItalic: require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    Poppins_ExtraLight: require('./assets/fonts/Poppins-ExtraLight.ttf'),
    Poppins_Italic: require('./assets/fonts/Poppins-Italic.ttf'),
    Poppins_LightItalic: require('./assets/fonts/Poppins-LightItalic.ttf'),
    Poppins_Light: require('./assets/fonts/Poppins-Light.ttf'),
    Poppins_MediumItalic: require('./assets/fonts/Poppins-MediumItalic.ttf'),
    Poppins_Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    Poppins_SemiBoldItalic: require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    Poppins_SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_ThinItalic: require('./assets/fonts/Poppins-ThinItalic.ttf'),
    Poppins_Thin: require('./assets/fonts/Poppins-Thin.ttf'),
    IcoMoon: require('./assets/icons/icomoon.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Welcome"} component={WelcomeScreen} />
            <Stack.Screen name={"BottomNav"} component={BottomNavScreen} initialParams={{auth, setAuth}}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}
