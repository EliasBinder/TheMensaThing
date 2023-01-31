import {globalStyles} from "../util/StyleUtil";
import {List} from "./List";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {scale} from "../util/ScaleUtil";
import {Icon} from "./Icon";

const createListItem = ({text, id, checked, setChecked}: {text: string, id: string, checked: string, setChecked: (loc: string) => void}) => {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={() => {
            setChecked(id);
        }}>
            {checked == id ? <Icon name={"radiobox_marked"} color={'#fff'} size={30}/> : <Icon name={"radiobox_blank"} color={'#fff'} size={30}/>}
            <Text style={styles.menuItemText}>{text}</Text>
        </TouchableOpacity>
    )
}

export function LocationSelector({location, setLocation}: {location: string, setLocation: (loc: string) => void}) {

    const listItems = [
        createListItem({text: 'Bolzano', id: 'BZ', checked: location, setChecked: setLocation}),
        createListItem({text: 'Bressanone', id: 'BX', checked: location, setChecked: setLocation}),
        createListItem({text: 'Bruneck', id: 'BK', checked: location, setChecked: setLocation})
    ]

    return (
        <View style={[globalStyles.container, styles.container]}>
            <List items={listItems} toScroll={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: scale(40),
        paddingBottom: scale(40),
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
        fontFamily: 'Poppins_SemiBold',
        fontSize: 20,
        marginLeft: scale(18),
        marginRight: 'auto',
    }
});
