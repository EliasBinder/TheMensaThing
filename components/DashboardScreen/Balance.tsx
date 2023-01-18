import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {OccupationBar} from "./OccupationBar";
import {Card} from "../Card";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import {Icon} from "../Icon";

export function Balance({balance}: {balance: string}) {
    return (
        <Card
            title={"Card Balance"}
            icon={<Icon name={"pin"} color={"#E6E6E6"} size={25}/>}
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
