import PinIcon from "../../assets/images/pin";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TuneIcon from "../../assets/images/tune";
import {OccupationBar} from "./OccupationBar";
import {Icon} from "../../util/StyleUtil";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";

export function BarOccupation() {
    return (
        <Card
            title={"UniBar"}
            icon={<PinIcon color={"#E6E6E6"} dim={25}/>}
            interaction={
                <TouchableOpacity style={{marginLeft: 'auto'}}>
                    <TuneIcon color={"#E6E6E6"} dim={25}/>
                </TouchableOpacity>}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>Occupation in Bolzano</Text>
                <View style={styles.occupationContainer}>
                    <OccupationBar occupation={'70%'} style={StyleSheet.create({})}/>
                    <Text style={styles.occupationNum}>70%</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.cardText}>People present: 45</Text>
                    <Icon name={"trending_down"} color={"#fff"} size={25} style={{marginLeft: 'auto'}}></Icon>
                </View>
            </View>
        </Card>
    )
}

export const styles = StyleSheet.create({
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
