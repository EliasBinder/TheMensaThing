import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {globalColors, globalStyles, Icon} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {List} from "../components/List";

const createListItem = (iconName: string, text: string) => {
    return (
        <View style={styles.menuItem}>
            <View>{getIcon({label: iconName, color: globalColors.accent, size: 29})}</View>
            <Text style={styles.menuItemText}>{text}</Text>
        </View>
    )
}

const getIcon = ({label, color, size}: {label: string, color: string, size:number}) => {
    switch (label) {
        case 'leaf':
            return <Icon name={'leaf'} size={size} color={color}/>
        case 'frozen':
            return <Icon name={'frozen'} size={size} color={color}/>
        case 'celery':
            return <Icon name={'celery'} size={size} color={color}/>
        case 'milk':
            return <Icon name={'milk'} size={size} color={color}/>
        case 'wine':
            return <Icon name={'wine'} size={size} color={color}/>
        case 'fish':
            return <Icon name={'fish'} size={size} color={color}/>
        case 'egg':
            return <Icon name={'egg'} size={size} color={color}/>
        case 'pig':
            return <Icon name={'pig'} size={size} color={color}/>
        case 'soy_beans':
            return <Icon name={'soy_beans'} size={size} color={color}/>
        case 'wheat':
            return <Icon name={'wheat'} size={size} color={color}/>
        case 'sesame':
            return <Icon name={'sesame'} size={size} color={color}/>
        case 'cashew_nut':
            return <Icon name={'cashew_nut'} size={size} color={color}/>
    }
}

export function InformationScreen() {
    const listItems = [
        createListItem('leaf', 'Vegan'),
        createListItem('frozen', 'Contains frozen ingredients'),
        createListItem('celery', 'Celery and products thereof'),
        createListItem('milk', 'Milk and products thereof'),
        createListItem('wine', 'Sulphur dioxide and sulphites > 10mg/l'),
        createListItem('fish', 'Fish and products thereof'),
        createListItem('egg', 'Egg and products thereof'),
        createListItem('pig', 'Pork and products thereof'),
        createListItem('soy_beans', 'Soybeans and products thereof'),
        createListItem('wheat', 'Cereals containing gluten'),
        createListItem('sesame', 'Sesame seeds and products thereof'),
        createListItem('cashew_nut', 'Contains nuts'),
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
