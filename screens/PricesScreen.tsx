import {globalColors, globalStyles, Icon} from "../util/StyleUtil";
import {Header} from "../components/Header";
import {FlatList, ScrollView, View} from "react-native";
import React from "react";
import {StyleSheet, Text} from "react-native";
import {scale} from "../util/ScaleUtil";
import {usePricesList} from "../hooks/usePricesList";
import DropDownPicker, {ItemType, ValueType} from 'react-native-dropdown-picker';
import {menus} from "../model/prices/menus";
import {menuItem} from "../model/prices/menuItem";
import {MenuItem} from "../components/PricesScreen/MenuItem";
import {usePreferredLocation} from "../hooks/usePreferredLocation";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AZURE_INSTANCE} from "../util/AuthUtil";
import {SettingsScreen} from "./ProfileScreen/SettingsScreen";
import {NotLoggedInScreen} from "./ProfileScreen/NotLoggedInScreen";
import {LoginScreen} from "./LoginScreen";
import {PreferredDishesScreen} from "./ProfileScreen/PreferredDishesScreen";
import {LocationScreen} from "./ProfileScreen/LocationScreen";
import {EatingHabitsScreen} from "./ProfileScreen/EatingHabitsScreen";
import {PriceInformationScreen} from "./PricesScreen/PriceInformationScreen";

export function PricesScreen() {

    const Stack = createNativeStackNavigator()

    const [loggedIn, setLoggedIn] = React.useState(AZURE_INSTANCE.isLoggedIn())

    const Router = ({navigation, route}: {navigation: any, route: any}) => {
        return (
            <View style={[globalStyles.container, globalStyles.dropShadow, styles.root]}>
                <Header title={'Prices'}/>
                {loggedIn ? <PriceInformationScreen navigation={navigation} setLoggedIn={setLoggedIn}/> : <NotLoggedInScreen navigation={navigation}/>}
            </View>
        )
    }

    const LoginScreenBridge = ({navigation, route}: {navigation: any, route: any}) => {
        return <LoginScreen navigation={navigation} route={route} setLoggedIn={setLoggedIn}/>
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Router"} component={Router} options={{animation: 'slide_from_left'}} />
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
