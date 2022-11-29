import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import WelcomeScreen from "./screens/WelcomeScreen";
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import createStackNavigator, {createNativeStackNavigator} from "@react-navigation/native-stack";
import DashboardScreen from "./screens/DashboardScreen";
import BottomNavScreen from "./screens/BottomNavScreen";
import {createIconSetFromIcoMoon} from "@expo/vector-icons";

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User, OAuthProvider } from 'firebase/auth';
import {AuthUtil, AuthUtilType} from "./util/AuthUtil";

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

