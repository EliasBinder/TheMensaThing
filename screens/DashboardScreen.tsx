import React, {createRef, useEffect, useRef, useState} from 'react';
import {Animated, ScrollView, StyleSheet, Text, View, Image} from "react-native";
import {globalColors, globalStyles, Icon} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {MensaOccupation} from "../components/DashboardScreen/MensaOccupation";
import {BarOccupation} from "../components/DashboardScreen/BarOccupation";
import {Suggestion} from "../components/DashboardScreen/Suggestion";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./LoginScreen";
import {Header} from "../components/Header";
import {AZURE_INSTANCE} from "../util/AuthUtil";
import {Balance} from "../components/DashboardScreen/Balance";
import {useProfileImage} from "../hooks/useProfileImage";
import {useBalance} from "../hooks/useBalance";

const DashboardScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const Stack = createNativeStackNavigator()

    const imageSource = useProfileImage();
    let balanceRef = createRef<Text>()
    const balance = useBalance();

    const Router = ({navigation, route}: {navigation: any, route: any}) => {
        return (
            <View style={globalStyles.container}>
                <Header title={"Dashboard"} icon={
                        !AZURE_INSTANCE.isLoggedIn() ?
                            <Icon name={"profile"} color={'#fff'} size={48}/>
                            :
                            <Image style={{width: 60, height: undefined, borderRadius: 15, overflow: 'hidden', aspectRatio: 1}} source={imageSource}/>
                } />
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                    { AZURE_INSTANCE.isLoggedIn() ? <View style={[globalStyles.cardRow, {marginBottom: 20}]} ref={balanceRef}>
                        <Balance balance={balance}/>
                    </View> : <></>
                    }
                    <View style={globalStyles.cardRow}>
                        <MensaOccupation/>
                    </View>
                    <View style={[globalStyles.cardRow, {marginTop: 20}]}>
                        <BarOccupation/>
                    </View>
                    { AZURE_INSTANCE.isLoggedIn() ?
                        (
                            <View style={[globalStyles.cardRow, {marginTop: 20}]}>
                                <Suggestion navigation={navigation}/>
                            </View>)
                        : <></>
                    }
                </ScrollView>
            </View>
        )
    }

    const LoginScreenBridge = ({navigation, route}: {navigation: any, route: any}) => {
        return (
            <LoginScreen navigation={navigation} route={route} setLoggedIn={undefined}/>
        )
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Router"} component={Router} options={{animation: 'slide_from_left'}} initialParams={route.params}/>
            <Stack.Screen name={"Login"} component={LoginScreenBridge} options={{animation: 'slide_from_right'}} initialParams={route.params}/>
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
