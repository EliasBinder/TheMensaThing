import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {List} from "../components/List";
import {Header} from "../components/Header";
import {eatingHabitsMap} from "../util/EatingHabitsUtil";
import {Icon} from "../components/Icon";

const createListItem = (iconName: string, text: string) => {
    return (
        <View style={styles.menuItem} key={iconName}>
            <View>{getIcon({label: iconName, color: globalColors.accent, size: 29})}</View>
            <Text style={styles.menuItemText}>{text}</Text>
        </View>
    )
}

const getIcon = ({label, color, size}: {label: string, color: string, size:number}) => {
    return <Icon name={label} size={size} color={color}/>
}

export function InformationScreen() {

    let listItemComponents: any[] = Object.keys(eatingHabitsMap).map((key: any) => {
        return createListItem(eatingHabitsMap[key], key);
    });

    return (
        <View style={globalStyles.container}>
                <Header title={'Information'}/>
                <ScrollView style={styles.scrollView} contentContainerStyle={ {
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <List items={listItemComponents}/>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: globalColors.primary,
        flex: 1,
        width: '100%',
        paddingLeft: scale(20),
        paddingRight: scale(20),
    },
    menuItem: {
        flexDirection: 'row',
        paddingLeft: scale(25),
        paddingRight: scale(25),
    },
    menuItemText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 20,
        marginLeft: scale(18),
        marginRight: scale(25)
    }
})
//Ae
