import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {OccupationBar} from "./OccupationBar";
import {Card} from "../Card";
import React, {useEffect, useState} from "react";
import {DishItem} from "../MenuScreen/DishItem";
import {Icon} from "../Icon";
import {usePreferredDishes} from "../../hooks/usePreferredDishes";
import {usePreferredLocation} from "../../hooks/usePreferredLocation";
import {useMenu} from "../../hooks/useMenu";
import {menuItem} from "../../model/menu/menuItem";

export function Suggestion() {

    const [preferredDishes, setPreferredDishes] = usePreferredDishes();
    const [location, setLocation] = usePreferredLocation();
    const [menu, setMenu] = useMenu("BZ");

    const [suggestion, setSuggestion] = useState(null as menuItem | null);

    useEffect(() => {
        if (location == '') return;
        setMenu(location)
    }, [location]);

    useEffect(() => {
        //Check main courses for matching dishes with preferred dishes
        if (menu == null) return;
        let matchingMainCourses = menu.mainCourses.filter((item) => {
            return preferredDishes.filter((_item) => { return _item.name == item.name }).length > 0;
        });
        if (matchingMainCourses.length > 0) {
            setSuggestion(matchingMainCourses[0]);
            return;
        }

        //check first courses for matching dishes with preferred dishes
        let matchingFirstCourses = menu.firstCourses.filter((item) => {
            return preferredDishes.filter((_item) => { return _item.name == item.name }).length > 0;
        });
        if (matchingFirstCourses.length > 0) {
            setSuggestion(matchingFirstCourses[0]);
            return;
        }

        //check pizzas for matching dishes with preferred dishes
        let matchingPizzas = menu.pizza.filter((item) => {
            return preferredDishes.filter((_item) => { return _item.name == item.name }).length > 0;
        });
        if (matchingPizzas.length > 0) {
            setSuggestion(matchingPizzas[0]);
            return;
        }

        setSuggestion(null);
    }, [menu, preferredDishes]);

    return (
        <Card
            title={"Suggestion"}
            icon={<Icon name={"suggestion"} color={"#E6E6E6"} size={25}/>}
            index={2}
        >
            <View style={styles.cardSection}>
                {
                    suggestion ?
                        <DishItem _menuItem={suggestion}/>
                    :
                        <Text style={styles.loadingText}>No suggestion available</Text>
                }
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardSection: {
        width: '100%',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "stretch"
    },
    loadingText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins'
    }
});
