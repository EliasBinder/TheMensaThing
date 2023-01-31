import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {globalColors} from "../../util/StyleUtil";
import {getImageOfIndex} from "../../util/EatingHabitsUtil";
import {Icon} from "../Icon";

export function DishItem({iconUrl, title, eatingHabitsAttribs}: {iconUrl: string, title: string, eatingHabitsAttribs: number[]}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: iconUrl}} style={styles.image}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.eatingHabitsContainer}>
                    {
                        eatingHabitsAttribs.map((item:number) => <Icon key={item} name={getImageOfIndex(item)} size={20} color={globalColors.accent}/>)
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.secondary,
        flex: 1,
        flexDirection: "row",
        marginTop: 15
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        marginRight: 15,
        borderRadius: 15,
        overflow: 'hidden'
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 20,
        textAlign: 'left',
    },
    infoContainer: {
        backgroundColor: globalColors.secondary,
        flex: 1,
        flexDirection: "column",
    },
    eatingHabitsContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
    }
});
