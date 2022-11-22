import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalColors, globalStyles, Icon} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {Card} from "../components/Card";
import PinIcon from "../assets/images/pin";
import Tune from "../assets/images/tune";
import TuneIcon from "../assets/images/tune";
import {OccupationBar} from "../components/DashboardScreen/OccupationBar";
import ProfileIcon from "../assets/images/profile";
import {MensaOccupation} from "../components/DashboardScreen/MensaOccupation";
import {BarOccupation} from "../components/DashboardScreen/BarOccupation";
import {Suggestion} from "../components/DashboardScreen/Suggestion";

const DashboardScreen = () => {
    return (
        <View style={globalStyles.container}>
            <View style={styles.title}>
                <Text style={globalStyles.header1}>Dashboard</Text>
                <View style={styles.imgContainer}>
                    <ProfileIcon color={'#fff'}  dim={48}/>
                </View>
            </View>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <View style={styles.cardRow}>
                    <MensaOccupation/>
                </View>
                <View style={[styles.cardRow, {marginTop: 20}]}>
                    <BarOccupation/>
                </View>
                <View style={[styles.cardRow, {marginTop: 20}]}>
                    <Suggestion/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
        paddingTop: scale(30),
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
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 26,
        marginTop: 15,
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
});

export default DashboardScreen
