import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DashboardScreen from "./DashboardScreen";
import {MenuScreen} from "./MenuScreen";
import {InformationScreen} from "./InformationScreen";
import {MapScreen} from "./MapScreen";
import {ProfileScreen} from "./ProfileScreen";
import {TouchableOpacity, View, Text, SafeAreaView, StyleSheet} from "react-native";
import {scale} from "../util/ScaleUtil";
import ProfileIcon from "../assets/images/profile";
import MenuIcon from "../assets/images/menu";
import InfoIcon from "../assets/images/info";
import MapIcon from "../assets/images/map";
import RocketIcon from "../assets/images/rocket";
import React, {Component} from "react";
import {StatusBar} from "expo-status-bar";

const CustomTabBar = ({state, descriptors, navigation}: {state:any, descriptors: any, navigation:any}) => {
    return (
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
                            return <RocketIcon color={iconColor} />
                        case 'Menu':
                            return <MenuIcon color={iconColor} />
                        case 'Information':
                            return <InfoIcon color={iconColor} />
                        case 'Map':
                            return <MapIcon color={iconColor} />
                        case 'Profile':
                            return <ProfileIcon color={iconColor} dim={38} />
                    }
                }

                const getTouchable = ({inner, key}: {inner: any, key: string|undefined}) => {
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
                                {getTouchable({inner: (<View style={styles.center}>{getIcon()}</View>), key: undefined})}
                            </View>
                        </View>
                    ): (
                        getTouchable({inner: getIcon(), key: index})
                    )
            })}
        </View>
    );
}


const BottomNavScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#081D40'} style={"light"}/>
            <Tab.Navigator initialRouteName={"Dashboard"} screenOptions={{headerShown: false}} tabBar={props => <CustomTabBar {...props} />}>
                <Tab.Screen name="Menu" component={MenuScreen} />
                <Tab.Screen name="Information" component={InformationScreen} />
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#081D40',
        flex: 1
    },
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#081D40',
        overflow: 'visible'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerOutline: {
        borderRadius: 100,
        backgroundColor: '#040F21',
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
        backgroundColor: '#0E3067',
        width: 60,
        height: 60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
});

export default BottomNavScreen
