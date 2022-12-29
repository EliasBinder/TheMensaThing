import PinIcon from "../../assets/images/pin";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TuneIcon from "../../assets/images/tune";
import {OccupationBar} from "./OccupationBar";
import {Icon} from "../../util/StyleUtil";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";

export function Balance({balance}: {balance: string}) {
    return (
        <Card
            title={"Card Balance"}
            icon={<PinIcon color={"#E6E6E6"} dim={25}/>}
            index={0}
        >
            <View style={styles.cardSection}>
                <Text style={styles.cardText}>{balance}</Text>
            </View>
        </Card>
    )
}

export const styles = StyleSheet.create({
    cardSection: {
        width: '100%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
    },
    cardText: {
        color: "#fff",
        fontSize: 28,
        fontFamily: "Poppins"
    }
});
