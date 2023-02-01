import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {OccupationBar} from "./OccupationBar";
import {globalColors} from "../../util/StyleUtil";
import {Card} from "../Card";
import React, {useEffect} from "react";
import {scale} from "../../util/ScaleUtil";
import {LocationSelectorSheet} from "../LocationSelectorSheet";
import {Icon} from "../Icon";
import {useMensaOccupation} from "../../hooks/useMensaOccupation";
import {usePreferredLocation} from "../../hooks/usePreferredLocation";

export function MensaOccupation() {

    const [changeLocationModal, setChangeLocationModal] = React.useState(false);

    const [location, setLocation] = usePreferredLocation();

    const [occupation, setOccupation] = useMensaOccupation('BZ');

    const [locationText, setLocationText] = React.useState("Bolzano");

    useEffect(() => {
        if (location == '') return;
        setOccupation(location)
        setLocationText(location == "BZ" ? "Bolzano" : location == "BX" ? "Bressanone" : "Bruneck");
    }, [location]);

    return (
        <Card
            title={"Mensa"}
            icon={<Icon name={"menu"} color={"#E6E6E6"} size={25}/>}
            interaction={
                <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => setChangeLocationModal(true)}>
                    <Icon name={"tune"} color={"#E6E6E6"} size={25}/>
                </TouchableOpacity>}
            index={0}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>Occupation in {locationText}</Text>
                <View style={styles.occupationContainer}>
                    <OccupationBar occupation={occupation/155.0 + '%'} style={StyleSheet.create({})}/>
                    <Text style={styles.occupationNum}>{parseInt(occupation/155.0 + '') + '%'}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.cardText}>Seats occupied: {occupation}/155</Text>
                    {/*<Icon name={"trending_up"} color={"#fff"} size={25} style={{marginLeft: 'auto'}}></Icon>*/}
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



