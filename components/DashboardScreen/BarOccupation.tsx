import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {OccupationBar} from "./OccupationBar";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import {Icon} from "../Icon";

export function BarOccupation() {
    return (
        <Card
            title={"UniBar"}
            icon={<Icon name={"pin"} color={"#E6E6E6"} size={25}/>}
            interaction={
                <TouchableOpacity style={{marginLeft: 'auto'}}>
                    <Icon name={"tune"} color={"#E6E6E6"} size={25}/>
                </TouchableOpacity>}
            index={1}
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
        fontFamily: "Poppins"
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
        fontFamily: "Poppins",
        marginLeft: 20
    },
    detailsContainer: {
        marginTop: 20,
        flexDirection: "row",
        width: '100%'
    }
});
