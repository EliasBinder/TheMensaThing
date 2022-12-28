import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {globalStyles} from "../../util/StyleUtil";
import {List} from "../../components/List";
import {scale} from "../../util/ScaleUtil";
import Checkbox from "../../assets/images/checkbox";
import React from "react";
import CheckboxMarked from "../../assets/images/checkboxMarked";
import {useEatingHabits} from "../../hooks/useEatingHabits";
import {eatingHabitsMap} from "../../util/EatingHabitsUtil";

const createListItem = ({text, id, eatingHabits, setEatingHabits}: {text: string, id: number, eatingHabits: number[], setEatingHabits: Function}) => {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={() => {
            if (eatingHabits.includes(id)) {
                setEatingHabits(eatingHabits.filter((item) => item != id));
            } else {
                setEatingHabits([...eatingHabits, id].sort());
            }
        }}>
            {eatingHabits.includes(id) ? <CheckboxMarked color={'#fff'} dim={30}/> : <Checkbox color={'#fff'} dim={30}/>}
            <Text style={styles.menuItemText}>{text}</Text>
        </TouchableOpacity>
    )
}

export function EatingHabitsScreen({navigation, route}: {navigation: any, route: any}) {

    const [eatingHabits, setEatingHabits] = useEatingHabits();

    const listItems: any[] = Object.keys(eatingHabitsMap).map((key, index) => {
        return createListItem({text: key, id: index, eatingHabits: eatingHabits, setEatingHabits: setEatingHabits})
    });

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
