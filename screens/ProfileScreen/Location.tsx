import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {globalStyles} from "../../util/StyleUtil";
import {List} from "../../components/List";
import {scale} from "../../util/ScaleUtil";
import RadioboxMarked from "../../assets/images/radioboxMarked";
import Radiobox from "../../assets/images/radiobox";

const createListItem = ({text, id, checked, setChecked}: {text: string, id: number, checked: number, setChecked: Function}) => {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={() => setChecked(id)}>
            {checked == id ? <RadioboxMarked color={'#fff'} dim={30}/> : <Radiobox color={'#fff'} dim={30}/>}
            <Text style={styles.menuItemText}>{text}</Text>
        </TouchableOpacity>
    )
}

export function Location({navigation, route}: {navigation: any, route: any}) {

    const [checked, setChecked] = React.useState(0);

    const listItems = [
        createListItem({text: 'Bolzano', id: 0, checked, setChecked}),
        createListItem({text: 'Bressanone', id: 1, checked, setChecked}),
        createListItem({text: 'Brunico', id: 2, checked, setChecked}),
    ]

    return (
        <>
            <StackNavigationHeader title={'Location'} navigation={navigation} route={route} />
            <View style={[globalStyles.container, styles.container]}>
                <List items={listItems} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: scale(40),
        paddingBottom: scale(40),
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
