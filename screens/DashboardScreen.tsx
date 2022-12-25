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

const DashboardScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const Stack = createNativeStackNavigator()

    let imageRef = createRef<Image>()
    const [imageSource, setImageSource] = useState({
        uri: placeholder,
        method: 'GET',
        headers: {}
    });
    let balanceRef = createRef<Text>()
    const [balance, setBalance] = useState('Loading...')

    useEffect(() => {
        if (AZURE_INSTANCE.isLoggedIn()) {
            AZURE_INSTANCE.getUserInfo().then((info) => {
                setImageSource({
                    uri: info.ImageUrl,
                    method: 'GET',
                    headers: {
                        // @ts-ignore //TODO
                        Authorization: 'Bearer ' + AZURE_INSTANCE.getToken().accessToken
                    }
                })
            });
            AZURE_INSTANCE.getMoney().then((money) => {
                setBalance(money.StatusDescription.substring(0, money.StatusDescription.length-2) + '€')
            });
        }
    }, []);

    const Router = ({navigation, route}: {navigation: any, route: any}) => {
        return (
            <View style={globalStyles.container}>
                <Header title={"Dashboard"} icon={
                        !AZURE_INSTANCE.isLoggedIn() ?
                            <Icon name={"profile"} color={'#fff'} size={48}/>
                            :
                            <Image ref={imageRef} style={{height: 60, width: 60}} source={imageSource}/>
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

const placeholder = 'data:image/png;base64,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';

export default DashboardScreen
