import {View, StyleSheet, ScrollView, Animated} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {scale} from "../util/ScaleUtil";
import {globalColors} from "../util/StyleUtil";

const createDivider = () => {
    return <View style={styles.dividerContainer}>
        <View style={styles.divider}/>
    </View>
}

export function List({items, toScroll}: {items: any[], toScroll?: boolean}) {

    const itemAnimationRefs = items.map(() => useRef(new Animated.Value(-60)).current);
    const itemAnimationNegativeRefs = items.map(() => useRef(new Animated.Value(60)).current);

    const itemAnimations = items.map((item, index) => {
        return Animated.timing(
            itemAnimationRefs[index],
            {
                useNativeDriver: false,
                toValue: 0,
                duration: 250,
                delay: 100 * index,
            }
        )
    })
    const itemNegativeAnimations = items.map((item, index) => {
        return Animated.timing(
            itemAnimationNegativeRefs[index],
            {
                useNativeDriver: false,
                toValue: 0,
                duration: 250,
                delay: 100 * index,
            }
        )
    })

    useEffect(() => {
        Animated.parallel([...itemAnimations, ...itemNegativeAnimations]).start();
    }, [itemAnimations, itemNegativeAnimations])

    return (
        <ScrollView style={styles.listContainer} contentContainerStyle={styles.listContainerInner}>
            <View style={styles.listContainer}>
                {items.map((item, index, array) => {
                    //add key to each item
                    return (
                        <View key={index}>
                            <Animated.View style={{
                                marginLeft: itemAnimationRefs[index],
                                marginRight: itemAnimationNegativeRefs[index]
                            }}>
                                {item}
                            </Animated.View>
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
        backgroundColor: globalColors.secondary,
        borderRadius: 15,
        marginLeft: scale(20),
        marginRight: scale(20),
    },
    listContainerInner: {
        flexDirection: 'column',
        justifyContent: "flex-start",
        paddingTop: scale(20),
        paddingBottom: scale(20),
        paddingRight: scale(20),
    },
    dividerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    divider: {
        backgroundColor: globalColors.primary,
        height: 2,
        width: '90%',
        marginTop: scale(20),
        marginBottom: scale(20),
    }
})
