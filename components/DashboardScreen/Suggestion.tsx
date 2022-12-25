import PinIcon from "../../assets/images/pin";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TuneIcon from "../../assets/images/tune";
import {OccupationBar} from "./OccupationBar";
import {Icon} from "../../util/StyleUtil";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import {BigButton} from "../BigButton";

export function Suggestion({navigation}: {navigation: any}) {
    return (
        <Card
            title={"Suggestion"}
            icon={<PinIcon color={"#E6E6E6"} dim={25}/>}
            index={2}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>
                    You can suggest new features or report bugs on our GitHub page.
                </Text>
            </View>
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
    },
    notLoggedInContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        width: '100%'
    }
});

const loginBtnStyle = StyleSheet.create({
    button: {
        marginTop: 20,
    }
});
