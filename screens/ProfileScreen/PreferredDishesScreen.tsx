import StackNavigationHeader from "../../components/StackNavigationHeader";
import {StyleSheet, View, Text, ScrollView} from "react-native";
import {globalColors, globalStyles} from "../../util/StyleUtil";
import React from "react";
import {scale} from "../../util/ScaleUtil";
import {usePreferredDishes} from "../../hooks/usePreferredDishes";
import {DishItem} from "../../components/MenuScreen/DishItem";

export function PreferredDishesScreen({navigation}: {navigation: any}) {

    const [preferredDishes, setPreferredDishes] = usePreferredDishes();

    return (
        <>
            <StackNavigationHeader title={'Preferred Dishes'} navigation={navigation} />
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                {
                    preferredDishes != [] ?
                        preferredDishes.map((item, index) => {
                            return <DishItem key={index} _menuItem={item} style={styles.dishItem} />
                        })
                        :
                        <Text style={styles.loadingText}>Loading...</Text>
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: scale(40),
        paddingBottom: scale(40),
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
