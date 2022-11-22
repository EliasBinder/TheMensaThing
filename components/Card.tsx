import {globalStyles} from "../util/StyleUtil";
import {Text, View, StyleSheet} from "react-native";
import React from "react";

export function Card({title, icon, interaction, children}:{title: string, icon: any, interaction?: any, children: any}) {
    return (
        <View style={[globalStyles.box, styles.box]}>
            <View style={styles.topBar}>
                {icon ? icon : <></>}
                <Text style={styles.title}>{title}</Text>
                {interaction ? interaction : <View style={{marginLeft: 'auto'}}></View>}
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: "column",
        width: '100%',
        justifyContent: "flex-start",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
    },
    title: {
        color: "#fff",
        fontSize: 25,
        marginLeft: 20,
        fontFamily: "Poppins_SemiBold"
    },
    content: {
        marginTop: 30,
        alignSelf: "stretch"
    }
});
