import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import WelcomeScreen from "./screens/WelcomeScreen";
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import createStackNavigator, {createNativeStackNavigator} from "@react-navigation/native-stack";
import DashboardScreen from "./screens/DashboardScreen";
import BottomNav from "./components/BottomNav";
import {createIconSetFromIcoMoon} from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import {importIconFont} from "./util/StyleUtil";
import * as Location from 'expo-location';
import {GeofencingEventType, LocationGeofencingRegionState} from 'expo-location';
import * as TaskManager from 'expo-task-manager';

const LOCATION_TASK = 'location-task';
const LOCATION_TASK_FENCING = 'geofencing-location-task';

if(TaskManager.isTaskDefined(LOCATION_TASK_FENCING)){
  console.log("redefine task");
  TaskManager.unregisterTaskAsync(LOCATION_TASK_FENCING).then(r => {
    console.log("unregistered task", r);
    // @ts-ignore
    TaskManager.defineTask(LOCATION_TASK_FENCING, ({ data: {eventType, region}, error }) => {
      if (error) {
        console.log("error: " + error);
        return;
      }
      if (eventType === GeofencingEventType.Enter) {
        console.log("You entered region:" + JSON.stringify(region));
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
        console.log("You left region:" + JSON.stringify(region));
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
  }).catch(e => console.log("error unregistering task", e));
}else{
  console.log('define task');
  // @ts-ignore
  TaskManager.defineTask(LOCATION_TASK_FENCING, ({ data: {eventType, region}, error }) => {
    if (error) {
      console.log("error: " + error);
      return;
    }
    if (eventType === GeofencingEventType.Enter) {
      console.log("You entered region:" + JSON.stringify(region));
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
            console.log("You left region:" + JSON.stringify(region));
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
}

export default function App() {

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
    IcoMoon: require('./assets/fonts/svgfont.ttf'),
  });

  if (!loaded) {
    return null;
  }

  importIconFont();

  const Stack = createNativeStackNavigator();

  const dropdownTheme = require('./libraryThemes/dropdownCustomTheme')
  DropDownPicker.addTheme("Custom", dropdownTheme);
  DropDownPicker.setTheme('Custom');

  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Welcome"} component={WelcomeScreen} />
            <Stack.Screen name={"BottomNav"} component={BottomNav} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

