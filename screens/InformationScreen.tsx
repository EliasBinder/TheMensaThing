import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {List} from "../components/List";
import VeganIcon from "../assets/images/vegan";
import MenuIcon from "../assets/images/menu";

const createListItem = (iconName: string, text: string) => {
    return (
        <View style={styles.menuItem}>
            <View>{getIcon({label: iconName, color: globalColors.accent})}</View>
            <Text style={styles.menuItemText}>{text}</Text>
        </View>
    )
}

const getIcon = ({label, color}: {label: string, color: string}) => {
    switch (label) {
        case 'vegan':
            return <VeganIcon color={color}/>
        case 'Menu':
            return <MenuIcon color={color} />
    }
}

export function InformationScreen() {
    const listItems = [
        createListItem('vegan', 'Vegan'),
        createListItem('icon-name2', 'text2'),
    ];

    return (
        <View style={globalStyles.container}>
                <View style={styles.title}>
                    <Text style={globalStyles.header1}>Information</Text>
                </View>
                <ScrollView style={styles.scrollView} contentContainerStyle={ {
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <List items={listItems}/>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: globalColors.primary,
        flex: 1,
    },
    title: {
        paddingVertical: 35,
        paddingHorizontal: 26,
        marginTop: 30,
        backgroundColor: globalColors.primary,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start",
        width: '100%',
    },
    menuItem: {
        flexDirection: 'row',
        paddingLeft: scale(25),
        paddingRight: scale(25),
    },
    menuItemText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_SemiBold',
        fontSize: 20,
        marginLeft: scale(18),
        marginRight: 'auto',
    }
})
