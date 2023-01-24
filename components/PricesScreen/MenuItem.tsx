import {globalColors, globalStyles} from "../../util/StyleUtil";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import {menuItemEnty} from "../../model/prices/menuItemEntry";
import {List} from "../List";
import CheckboxMarked from "../../assets/images/checkboxMarked";
import ForkKnife from "../../assets/images/fork&knife";

const createMenuItem = (title: string, key: number) => {
    return (
        <View key={key} style={styles.menuItemEntry}>
            <Text style={styles.menuItemEntryText}>{title}</Text>
        </View>
    )
}

export function MenuItem({key, name, price, itemEntries}: {key: number, name: string, price: number, itemEntries: menuItemEnty[]}) {
    const listItems = itemEntries.map((item, index) => createMenuItem(item.name, index))

    return (
        <View key={key} style={[styles.container, globalStyles.dropShadow]}>
            <Text style={styles.name}>{name}</Text>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <List items={listItems} toScroll={false}/>
            </ScrollView>
            <Text style={styles.price}>{price} €</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.secondary,
        borderRadius: 15,
        padding: scale(20),
        marginVertical: scale(20),
        marginLeft: 10,
        marginRight: 10,
        width: 250,
        alignItems: 'flex-start',
    },
    name: {
        fontSize: scale(35),
        fontFamily: 'Poppins_SemiBold',
        color: '#fff',
        textAlign: 'left',
        marginLeft: scale(10),
    },
    scrollView: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        flex: 1,
    },
    scrollViewInner: {
        width: '100%',
    },
    menuItemEntry: {
        flexDirection: 'row',
    },
    menuItemEntryText: {
        fontSize: scale(20),
        fontFamily: 'Poppins',
        color: '#fff',
        marginLeft: 10
    },
    price: {
        fontSize: scale(25),
        fontFamily: 'Poppins_Bold',
        color: globalColors.accent,
        alignSelf: 'flex-end',
    }
})
