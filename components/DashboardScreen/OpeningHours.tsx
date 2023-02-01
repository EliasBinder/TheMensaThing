import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {OccupationBar} from "./OccupationBar";
import {globalColors} from "../../util/StyleUtil";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import {LocationSelectorSheet} from "../LocationSelectorSheet";
import {Icon} from "../Icon";
import {useOpeningHours} from "../../hooks/useOpeningHours";

export function OpeningHours() {

    const [changeLocationModal, setChangeLocationModal] = React.useState(false);

    const [location, setLocation] = React.useState('BZ');

    const openingHours = useOpeningHours();

    return (
        <Card
            title={"Opening hours"}
            icon={<Icon name={"opening_hours"} color={"#E6E6E6"} size={25}/>}
            interaction={
                <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => setChangeLocationModal(true)}>
                    <Icon name={"tune"} color={"#E6E6E6"} size={25}/>
                </TouchableOpacity>}
            index={0}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>Opening hours in {location}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>
                        {openingHours['BZ'].wednesday.open_noon} - {openingHours.BZ.wednesday.close_noon}
                    </Text>
                    <Text style={styles.detailText}>
                        {openingHours.BZ.wednesday.open_evening} - {openingHours.BZ.wednesday.close_evening}
                    </Text>
                </View>
            </View>
            <LocationSelectorSheet visible={changeLocationModal} setVisible={setChangeLocationModal} location={location} setLocation={setLocation}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardSection: {
        width: '100%',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
    },
    cardText: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Poppins"
    },
    detailText: {
        color: "#fff",
        fontSize: 20,
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
        marginTop: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
    }
});



