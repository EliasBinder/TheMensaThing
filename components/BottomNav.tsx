import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import {MenuScreen} from "../screens/MenuScreen";
import {InformationScreen} from "../screens/InformationScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import {StatusBar} from "expo-status-bar";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {PricesScreen} from "../screens/PricesScreen";
import {CustomTabBar} from "./CustomTabBar";

const BottomNav = () => {

    const Tab = createBottomTabNavigator();

    return (
        <>
            <SafeAreaView style={{backgroundColor: globalColors.primary}} />
            <SafeAreaView style={[styles.container, globalStyles.safeAreaView]}>
                <StatusBar backgroundColor={globalColors.primary} style={"light"}/>
                <Tab.Navigator
                    initialRouteName={"Dashboard"}
                    screenOptions={{headerShown: false, unmountOnBlur: true}}
                    tabBar={props => <CustomTabBar {...props} />}
                >
                    <Tab.Screen name="Menu" component={MenuScreen} />
                    <Tab.Screen name="Information" component={InformationScreen} />
                    <Tab.Screen name="Dashboard" component={DashboardScreen} />
                    <Tab.Screen name="Prices" component={PricesScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.secondary,
        flex: 1
    },
    center: {
        borderRadius: 100,
        backgroundColor: globalColors.tertiary,
        width: 65,
        height: 65,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
});

export default BottomNav
