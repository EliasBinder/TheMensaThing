import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {globalStyles} from "../../util/StyleUtil";
import {List} from "../../components/List";
import {scale} from "../../util/ScaleUtil";
import Checkbox from "../../assets/images/checkbox";
import React from "react";
import CheckboxMarked from "../../assets/images/checkboxMarked";

const createListItem = ({text}: {text: string}) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <TouchableOpacity style={styles.menuItem} onPress={() => setChecked(s => !s)}>
            {checked ? <CheckboxMarked color={'#fff'} dim={30}/> : <Checkbox color={'#fff'} dim={30}/>}
            <Text style={styles.menuItemText}>{text}</Text>
        </TouchableOpacity>
    )
}

export function EatingHabits({navigation, route}: {navigation: any, route: any}) {

    const listItems = [
        createListItem({text: 'Vegetarian'}),
        createListItem({text: 'Vegan'}),
        createListItem({text: 'Gluten Free'}),
        createListItem({text: 'Lactose Free'}),
        createListItem({text: 'Pescatarian'}),
        createListItem({text: 'Ketogenic'}),
        createListItem({text: 'Paleo'}),
        createListItem({text: 'Whole30'})
    ]


    return (
        <>
            <StackNavigationHeader title={'Eating Habits'} navigation={navigation} route={route} />
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
