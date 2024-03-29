import {View, StyleSheet} from "react-native";
import React from "react";
import {globalStyles} from "../util/StyleUtil";
import {NotLoggedInScreen} from "./ProfileScreen/NotLoggedInScreen";
import {SettingsScreen} from "./ProfileScreen/SettingsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {EatingHabitsScreen} from "./ProfileScreen/EatingHabitsScreen";
import {LocationScreen} from "./ProfileScreen/LocationScreen";
import {PreferredDishesScreen} from "./ProfileScreen/PreferredDishesScreen";
import {LoginScreen} from "./LoginScreen";
import {Header} from "../components/Header";
import {AZURE_INSTANCE} from "../util/AuthUtil";
import {ShareGPSScreen} from "./ProfileScreen/ShareGPSScreen";


export function ProfileScreen() {

    const Stack = createNativeStackNavigator()

    const [loggedIn, setLoggedIn] = React.useState(AZURE_INSTANCE.isLoggedIn())

    const ProfileScreenRoot = ({navigation}: {navigation: any}) => {
        return (
            <View style={[globalStyles.container, globalStyles.dropShadow, styles.root]}>
                <Header title={'Profile'}/>
                {loggedIn ? <SettingsScreen navigation={navigation} setLoggedIn={setLoggedIn}/> : <NotLoggedInScreen navigation={navigation}/>}
            </View>
        )
    }

    const LoginScreenBridge = ({navigation}: {navigation: any}) => {
        return <LoginScreen navigation={navigation} setLoggedIn={setLoggedIn}/>
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Router"} component={ProfileScreenRoot} options={{animation: 'slide_from_left'}} />
            <Stack.Screen name={"PreferredDishes"} component={PreferredDishesScreen} options={{animation: 'slide_from_right'}} />
            <Stack.Screen name={"Location"} component={LocationScreen} options={{animation: 'slide_from_right'}} />
            <Stack.Screen name={"EatingHabits"} component={EatingHabitsScreen} options={{animation: 'slide_from_right'}} />
            <Stack.Screen name={"ShareGPS"} component={ShareGPSScreen} options={{animation: 'slide_from_right'}} />
            <Stack.Screen name={"Login"} component={(LoginScreenBridge)} options={{animation: 'slide_from_right'}} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
    }
})
