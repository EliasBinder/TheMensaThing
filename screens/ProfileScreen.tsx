import {Text, View, StyleSheet} from "react-native";
import React from "react";
import {globalColors, globalStyles} from "../util/StyleUtil";
import ProfileIcon from "../assets/images/profile";
import {scale} from "../util/ScaleUtil";
import {NotLoggedIn} from "../components/ProfileScreen/NotLoggedIn";
import {Settings} from "../components/ProfileScreen/Settings";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {EatingHabitsScreen} from "./ProfileScreen/EatingHabitsScreen";
import {LocationScreen} from "./ProfileScreen/LocationScreen";
import {PreferredDishesScreen} from "./ProfileScreen/PreferredDishesScreen";

export function ProfileScreen() {

    const loggedIn = true;

    const Stack = createNativeStackNavigator()

    const Router = ({navigation, route}: {navigation: any, route: any}) => {
        return (
            <View style={[globalStyles.container, globalStyles.dropShadow, styles.root]}>
                <View style={styles.title}>
                    <Text style={globalStyles.header1}>Profile</Text>
                    <View style={styles.imgContainer}>
                        <ProfileIcon color={'#fff'}  dim={48}/>
                    </View>
                </View>
                {loggedIn ? <Settings navigation={navigation} route={route}/> : <NotLoggedIn />}
            </View>
        )
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Router"} component={Router} options={{animation: 'slide_from_left'}} />
            <Stack.Screen name={"PreferredDishes"} component={PreferredDishesScreen} options={{animation: 'slide_from_right'}} />
            <Stack.Screen name={"Location"} component={LocationScreen} options={{animation: 'slide_from_right'}} />
            <Stack.Screen name={"EatingHabits"} component={EatingHabitsScreen} options={{animation: 'slide_from_right'}} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        paddingVertical: 35,
        paddingHorizontal: 26,
        marginTop: 30,
        backgroundColor: globalColors.primary,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start",
        width: '100%',
    },
    imgContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalColors.secondary,
        borderRadius: 15,
        width: 60,
        maxWidth: 60,
        height: 60,
        maxHeight: 60,
        marginLeft: 'auto',
    }
})
