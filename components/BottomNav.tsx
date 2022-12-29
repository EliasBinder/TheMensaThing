import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import {MenuScreen} from "../screens/MenuScreen";
import {InformationScreen} from "../screens/InformationScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {TouchableOpacity, View, Text, SafeAreaView, StyleSheet} from "react-native";
import {scale} from "../util/ScaleUtil";
import ProfileIcon from "../assets/images/profile";
import MenuIcon from "../assets/images/menu";
import InfoIcon from "../assets/images/info";
import MapIcon from "../assets/images/map";
import RocketIcon from "../assets/images/dashboard";
import React, {Component} from "react";
import {StatusBar} from "expo-status-bar";
import {globalColors, globalStyles} from "../util/StyleUtil";
import DashboardIcon from "../assets/images/dashboard";
import {PricesScreen} from "../screens/PricesScreen";

const CustomTabBar = ({state, descriptors, navigation}: {state:any, descriptors: any, navigation:any}) => {
    return (
        <>
            <View style={{height: 12.5, width: '100%', backgroundColor: globalColors.primary}}></View>
            <View style={styles.tabBar}>
                {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const iconColor = isFocused ? '#fff' : '#787878';

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const getIcon = () => {
                        switch (label) {
                            case 'Dashboard':
                                return <DashboardIcon color={iconColor} dim={38}/>
                            case 'Menu':
                                return <MenuIcon color={iconColor} />
                            case 'Information':
                                return <InfoIcon color={iconColor} />
                            case 'Prices':
                                return <MapIcon color={iconColor} />
                            case 'Profile':
                                return <ProfileIcon color={iconColor} dim={38} />
                        }
                    }

                    const getTouchableIcon = ({inner, key}: {inner: any, key: string|undefined}) => {
                        return (
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={styles.buttonContainer}
                                key={key}
                            >
                                {inner}
                            </TouchableOpacity>
                        )
                    }

                    return label == 'Dashboard' ? (
                            <View key={index} style={styles.buttonContainer}>
                                <View style={styles.centerOutline}>
                                    {getTouchableIcon({inner: (<View style={styles.center}>{getIcon()}</View>), key: undefined})}
                                </View>
                            </View>
                        ): (
                            getTouchableIcon({inner: getIcon(), key: index})
                        )
                })}
            </View>
        </>
    );
}


const BottomNav = ({navigation, route}: {navigation: any, route: any}) => {

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
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: globalColors.secondary,
        overflow: 'visible'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerOutline: {
        borderRadius: 100,
        backgroundColor: globalColors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 85,
        top: -30,
        position: 'absolute',
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
