import {ScrollView, StyleSheet, Text} from "react-native";
import {globalColors} from "../../util/StyleUtil";
import {scale} from "../../util/ScaleUtil";
import {menuItem} from "../../model/menu/menuItem";
import {DishItem} from "../../components/MenuScreen/DishItem";
import React, {useEffect, useState} from "react";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {usePreferredLocation} from "../../hooks/usePreferredLocation";
import {useMenu} from "../../hooks/useMenu";

interface propType {
    navigation: any,
    route: any,
}

export function CourseScreen({navigation, route}: propType) {
    const {title}: {title: string} = route.params;

    const [location, setLocation] = usePreferredLocation();
    const [menu, setMenu] = useMenu("BZ");

    const [items, setItems] = useState([] as menuItem[]);

    useEffect(() => {
        if (menu === undefined) return;
        if (location == '') return;
        switch (title) {
            case "First courses":
                setItems(menu.firstCourses);
                console.log("first courses", menu.firstCourses)
                break;
            case "Main courses":
                setItems(menu.mainCourses);
                break;
        }
    }, [menu, location]);

    return (
        <>
            <StackNavigationHeader title={title} navigation={navigation}/>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                {
                    items !== [] ?
                        items.map((item, index) => {
                            return <DishItem key={index} iconUrl={item.imageUrl} title={item.name} eatingHabitsAttribs={item.allergens} style={styles.dishItem} />
                        })
                    :
                        <Text style={styles.loadingText}>Loading...</Text>
                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.primary,
        flex: 1
    },
    scrollView: {
        backgroundColor: globalColors.primary,
        flex: 1
    },
    scrollViewInner: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: scale(30),
        alignSelf: "stretch",
        paddingLeft: 20,
        paddingRight: 20,
    },
    dishItem: {
        backgroundColor: globalColors.secondary,
        padding: 15,
        borderRadius: 15,
    },
    loadingText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Poppins_Bold'
    }
});
