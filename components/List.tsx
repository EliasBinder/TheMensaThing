import {View, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {scale} from "../util/ScaleUtil";

const createDivider = () => {
    return <View style={styles.dividerContainer}>
        <View style={styles.divider}/>
    </View>
}

export function List({items}: {items: any[]}) {
    return (
        <ScrollView>
            <View style={styles.listContainer}>
                {items.map((item, index) => {
                    //add key to each item
                    return (
                        <View key={index} style={item.props.children[0].style}>
                            {item}
                            {index !== items.length - 1 && createDivider()}
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: scale(400),
        backgroundColor: '#081D40',
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: "flex-start",
        paddingTop: scale(20),
        paddingBottom: scale(20),
    },
    dividerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    divider: {
        backgroundColor: '#040F21',
        height: 2,
        width: '90%',
        marginTop: scale(20),
        marginBottom: scale(20),
    }
})
