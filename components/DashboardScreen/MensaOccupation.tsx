import PinIcon from "../../assets/images/pin";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TuneIcon from "../../assets/images/tune";
import {OccupationBar} from "./OccupationBar";
import {globalColors, Icon} from "../../util/StyleUtil";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import CloseIcon from "../../assets/images/close";
import {LocationSelector} from "../LocationSelector";
import {BottomSheet} from "react-native-btr";
import {LocationSelectorSheet} from "../LocationSelectorSheet";

export function MensaOccupation() {

    const [changeLocationModal, setChangeLocationModal] = React.useState(false);

    const [location, setLocation] = React.useState('BZ');

    return (
        <Card
            title={"Mensa"}
            icon={<PinIcon color={"#E6E6E6"} dim={25}/>}
            interaction={
                <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => setChangeLocationModal(true)}>
                    <TuneIcon color={"#E6E6E6"} dim={25}/>
                </TouchableOpacity>}
            index={0}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>Occupation in Bolzano</Text>
                <View style={styles.occupationContainer}>
                    <OccupationBar occupation={'70%'} style={StyleSheet.create({})}/>
                    <Text style={styles.occupationNum}>70%</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.cardText}>Seats occupied: 60/130</Text>
                    <Icon name={"trending_up"} color={"#fff"} size={25} style={{marginLeft: 'auto'}}></Icon>
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
    },
    changeLocRoot: {
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        height: 350,
        backgroundColor: globalColors.primary
    },
    changeLocHeader: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingTop: 25,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 5,
        width: '100%',
        backgroundColor: globalColors.primary
    }
});



