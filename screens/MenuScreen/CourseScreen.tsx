import {ScrollView, StyleSheet} from "react-native";
import {globalColors} from "../../util/StyleUtil";
import {scale} from "../../util/ScaleUtil";
import {menuItem} from "../../model/menu/menuItem";
import {DishItem} from "../../components/MenuScreen/DishItem";
import React from "react";
import StackNavigationHeader from "../../components/StackNavigationHeader";

interface propType {
    navigation: any,
    route: any,
}

export function CourseScreen({navigation, route}: propType) {
    const {menuList, title}: {menuList: menuItem[], title: string} = route.params;

    return (
        <>
            <StackNavigationHeader title={title} navigation={navigation}/>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                {
                    menuList.map((item, index) => {
                        return <DishItem key={index} iconUrl={item.imageUrl} title={item.name} eatingHabitsAttribs={[2,4]} style={styles.dishItem} />
                    })
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
    }
});
