import {StyleSheet, Text, View} from "react-native";
import {Card} from "../Card";
import React from "react";
import {Icon} from "../Icon";

interface propType {
    balance: string
}

export function Balance({balance}: propType) {
    return (
        <Card
            title={"Card Balance"}
            icon={<Icon name={"price"} color={"#E6E6E6"} size={25}/>}
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
