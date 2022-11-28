import React, {useEffect, useRef} from 'react';
import {Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalColors, globalStyles, Icon} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import ProfileIcon from "../assets/images/profile";
import {MensaOccupation} from "../components/DashboardScreen/MensaOccupation";
import {BarOccupation} from "../components/DashboardScreen/BarOccupation";
import {Suggestion} from "../components/DashboardScreen/Suggestion";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./LoginScreen";
import {Header} from "../components/Header";

const DashboardScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const Stack = createNativeStackNavigator()

    const Router = ({navigation, route}: {navigation: any, route: any}) => {
        return (
            <View style={globalStyles.container}>
                <Header title={"Dashboard"} icon={<ProfileIcon color={'#fff'} dim={48}/>} />
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                    <View style={styles.cardRow}>
                        <MensaOccupation/>
                    </View>
                    <View style={[styles.cardRow, {marginTop: 20}]}>
                        <BarOccupation/>
                    </View>
                    <View style={[styles.cardRow, {marginTop: 20}]}>
                        <Suggestion auth={route.params.auth} navigation={navigation}/>
                    </View>
                </ScrollView>
            </View>
        )
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Router"} component={Router} options={{animation: 'slide_from_left'}} initialParams={route.params}/>
            <Stack.Screen name={"Login"} component={LoginScreen} options={{animation: 'slide_from_right'}} initialParams={route.params}/>
        </Stack.Navigator>
    )
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.primary,
        flex: 1
    },
    scrollView: {
        backgroundColor: globalColors.primary,
        flex: 1
    },
    scrollViewInner: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: scale(30),
        alignSelf: "stretch"
    },
    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        paddingHorizontal: scale(30),
    },
    cardSection: {
        width: '100%',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "stretch"
    },
    cardText: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Poppins_SemiBold"
    },
    occupationBar1: {
    },
    occupationContainer: {
        width: 'auto',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: scale(15),
    },
    occupationNum: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Poppins_SemiBold",
        marginLeft: 20
    },
    detailsContainer: {
        marginTop: 20,
        flexDirection: "row",
        width: '100%'
    }
});

export default DashboardScreen
