import {globalStyles} from "../util/StyleUtil";
import {Header} from "../components/Header";
import {View} from "react-native";
import React from "react";
import {StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AZURE_INSTANCE} from "../util/AuthUtil";
import {NotLoggedInScreen} from "./ProfileScreen/NotLoggedInScreen";
import {LoginScreen} from "./LoginScreen";
import {PriceInformationScreen} from "./PricesScreen/PriceInformationScreen";

export function PricesScreen() {

    const Stack = createNativeStackNavigator()

    const [loggedIn, setLoggedIn] = React.useState(AZURE_INSTANCE.isLoggedIn())

    const PricesScreenRoot = ({navigation}: {navigation: any}) => {
        return (
            <View style={[globalStyles.container, globalStyles.dropShadow, styles.root]}>
                <Header title={'Prices'}/>
                {loggedIn ? <PriceInformationScreen /> : <NotLoggedInScreen navigation={navigation}/>}
            </View>
        )
    }

    const LoginScreenBridge = ({navigation}: {navigation: any}) => {
        return <LoginScreen navigation={navigation} setLoggedIn={setLoggedIn}/>
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Router"} component={PricesScreenRoot} options={{animation: 'slide_from_left'}} />
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
