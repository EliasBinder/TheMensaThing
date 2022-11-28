import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {globalColors, globalStyles, Icon} from "../util/StyleUtil";
import {scale} from "../util/ScaleUtil";
import {List} from "../components/List";
import {Header} from "../components/Header";
import InfoIcon from "../assets/images/info";

const createListItem = (iconName: string, text: string) => {
    return (
        <View style={styles.menuItem}>
            <View>{getIcon({label: iconName, color: globalColors.accent, dim: {width: 29, height: 29}})}</View>
            <Text style={styles.menuItemText}>{text}</Text>
        </View>
    )
}

const getIcon = ({label, color, dim}: {label: string, color: string, dim: {width:number, height: number}}) => {
    switch (label) {
        case 'leaf':
            return <Icon name={'leaf'} size={29} color={globalColors.accent}/>
        case 'frozen':
            return <Icon name={'frozen'} size={29} color={globalColors.accent}/>
        case 'celery':
            return <Icon name={'celery'} size={29} color={globalColors.accent}/>
        case 'milk':
            return <Icon name={'milk'} size={29} color={globalColors.accent}/>
        case 'wine':
            return <Icon name={'wine'} size={29} color={globalColors.accent}/>
        case 'mustard':
            return <Icon name={'mustard'} size={29} color={globalColors.accent}/>
    }
}

export function InformationScreen() {
    const listItems = [
        createListItem('leaf', 'Vegan'),
        createListItem('frozen', 'Contains frozen ingredients'),
        createListItem('celery', 'Celery'),
        createListItem('milk', 'Contains milk'),
        createListItem('wine', 'contains sulphur'),
        createListItem('mustard', 'contains mustard'),
    ];

    return (
        <View style={globalStyles.container}>
                <Header title={'Information'}/>
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
        marginRight: scale(25)
    }
})
