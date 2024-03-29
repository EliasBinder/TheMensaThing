import { useFonts } from 'expo-font';
import WelcomeScreen from "./screens/WelcomeScreen";
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BottomNav from "./components/BottomNav";
import DropDownPicker from "react-native-dropdown-picker";
import {importIconFont} from "./util/StyleUtil";
import {GeofencingEventType} from 'expo-location';
import * as TaskManager from 'expo-task-manager';

const LOCATION_TASK_FENCING = 'geofencing-location-task';

//redefine the task if it is already defined, otherwise it will not be executed correctly
if(TaskManager.isTaskDefined(LOCATION_TASK_FENCING)){
  console.log("task already defined");
  /*TaskManager.unregisterTaskAsync(LOCATION_TASK_FENCING).then(r => {
    console.log("unregistered task", r);
  }).catch(e => console.log("error unregistering task", e));*/
}else {
  // @ts-ignore
  TaskManager.defineTask(LOCATION_TASK_FENCING, ({data: {eventType, region}, error}) => {
    if (error) {
      console.log("error: " + error);
      return;
    }
    if (eventType === GeofencingEventType.Enter) {
      console.log("You entered region:" + JSON.stringify(region));
      enterRegion(region.identifier as "BZ"|"BX"|"BK");
    } else if (eventType === GeofencingEventType.Exit) {
      console.log("You left region:" + JSON.stringify(region));
      exitRegion(region.identifier as "BZ"|"BX"|"BK");
    } else {
      //none of the events triggered
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
    IcoMoon: require('./assets/fonts/svgtofont.ttf'),
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

