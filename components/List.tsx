import {View, StyleSheet, ScrollView, Animated} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {scale} from "../util/ScaleUtil";
import {globalColors} from "../util/StyleUtil";

const createDivider = () => {
    return <View style={styles.dividerContainer}>
        <View style={styles.divider}/>
    </View>
}

export function List({items}: {items: any[]}) {

    // const listItemAnim = useRef(new Animated.Value(-50)).current;
    // const [listItemNegativeAnim, setListItemNegativeAnim] = useState(-50);
    //
    // listItemAnim.addListener(({value}) => {
    //     setListItemNegativeAnim(-value)
    // });

    const itemAnimationRefs = items.map(() => useRef(new Animated.Value(-50)).current);
    const [itemAnimationNegativeRefs, setItemAnimationNegativeRefs] = useState(items.map(() => 50));
    itemAnimationRefs.forEach((ref, index) => {
        ref.addListener(({value}) => {
            itemAnimationNegativeRefs[index] = -value;
            setItemAnimationNegativeRefs(itemAnimationNegativeRefs);
        })
    })

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

    useEffect(() => {
        itemAnimations.forEach((animation) => {
            animation.start()
        })
    }, [itemAnimations])

    return (
        <ScrollView>
            <View style={styles.listContainer}>
                {items.map((item, index) => {
                    //add key to each item
                    return (
                        <>
                            <Animated.View key={index} style={{
                                marginLeft: itemAnimationRefs[index],
                                marginRight: itemAnimationNegativeRefs[index]
                            }}>
                                {item}
                            </Animated.View>
                            {index !== items.length - 1 && createDivider()}
                        </>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: scale(400),
        backgroundColor: globalColors.secondary,
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
        backgroundColor: globalColors.primary,
        height: 2,
        width: '90%',
        marginTop: scale(20),
        marginBottom: scale(20),
    }
})
