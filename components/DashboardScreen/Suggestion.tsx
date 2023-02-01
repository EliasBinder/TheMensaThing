import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {OccupationBar} from "./OccupationBar";
import {Card} from "../Card";
import React from "react";
import {DishItem} from "../MenuScreen/DishItem";
import {Icon} from "../Icon";

export function Suggestion() {
    return (
        <Card
            title={"Suggestion"}
            icon={<Icon name={"suggestion"} color={"#E6E6E6"} size={25}/>}
            index={2}
        >
            <View style={styles.cardSection}>
                <DishItem iconUrl={"https://picsum.photos/400/300"} title={"Delicious meal"} eatingHabitsAttribs={[1,2,3,6]}/>
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
    }
});
