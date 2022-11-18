import StackNavigationHeader from "../../components/StackNavigationHeader";
import {StyleSheet, View, Text} from "react-native";
import {globalStyles} from "../../util/StyleUtil";
import React from "react";
import {scale} from "../../util/ScaleUtil";

export function PreferredDishesScreen({navigation, route}: {navigation: any, route: any}) {
    return (
        <>
            <StackNavigationHeader title={'Preferred Dishes'} navigation={navigation} route={route} />
            <View style={[globalStyles.container, styles.container]}>
                <Text style={{color: '#fff'}}>This is the preferred dishes screen</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: scale(40),
        paddingBottom: scale(40),
    }
});
