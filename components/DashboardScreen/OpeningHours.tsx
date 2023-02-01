import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {OccupationBar} from "./OccupationBar";
import {globalColors} from "../../util/StyleUtil";
import {Card} from "../Card";
import React, {useEffect} from "react";
import {scale} from "../../util/ScaleUtil";
import {LocationSelectorSheet} from "../LocationSelectorSheet";
import {Icon} from "../Icon";
import {useOpeningHours} from "../../hooks/useOpeningHours";
import {usePreferredLocation} from "../../hooks/usePreferredLocation";
import {setUpTests} from "react-native-reanimated/lib/types/lib/reanimated2/jestUtils";

export function OpeningHours() {

    const [changeLocationModal, setChangeLocationModal] = React.useState(false);

    const [location, setLocation] = usePreferredLocation()

    const [openingHours, setOpeningHours] = useOpeningHours('BZ');

    const [locationText, setLocationText] = React.useState("Loading...");

    useEffect(() => {
        if (location == '') return;
        setLocationText(location == "BZ" ? "Bolzano" : location == "BX" ? "Bressanone" : "Bruneck");
        setOpeningHours(location);
    }, [location]);

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
                <Text style={styles.cardText}>{locationText}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>
                        {openingHours.openingHours}
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
        fontSize: 18,
        fontFamily: "Poppins"
    },
    detailText: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Poppins",
        textAlign: "center"
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



