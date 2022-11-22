import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {Card} from "../components/DashboardScreen/Card";
import PinIcon from "../assets/images/pin";
import Tune from "../assets/images/tune";
import TuneIcon from "../assets/images/tune";
import {OccupationBar} from "../components/DashboardScreen/OccupationBar";

const DashboardScreen = () => {
    return (
        <View style={globalStyles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <View style={styles.cardRow}>
                    <Card
                        title={"Mensa"}
                        icon={<PinIcon color={"#E6E6E6"} dim={25}/>}
                        interaction={
                        <TouchableOpacity style={{marginLeft: 'auto'}}>
                            <TuneIcon color={"#E6E6E6"} dim={25}/>
                        </TouchableOpacity>}
                    >
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Occupation in Bolzano</Text>
                            <View style={styles.occupationContainer}>
                                <OccupationBar occupation={'70%'} style={styles.occupationBar1}/>
                                <Text style={styles.occupationNum}>70%</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styles.cardText}>Seats occupied: 60/130</Text>

                            </View>
                        </View>
                    </Card>
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
        marginLeft: 30
    }
});

export default DashboardScreen
