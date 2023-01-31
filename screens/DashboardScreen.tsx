import React, {createRef} from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
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
import {Icon} from "../components/Icon";

const DashboardScreen = () => {

    const imageSource = useProfileImage();
    const balanceRef = createRef<Text>()
    const balance = useBalance();

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
                            <Suggestion/>
                        </View>)
                    : <></>
                }
            </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: globalColors.primary,
        flex: 1
    },
    scrollViewInner: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: scale(30),
        alignSelf: "stretch"
    }
});

export default DashboardScreen
