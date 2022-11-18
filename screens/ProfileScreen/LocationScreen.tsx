import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {globalStyles} from "../../util/StyleUtil";
import {List} from "../../components/List";
import {scale} from "../../util/ScaleUtil";
import RadioboxMarked from "../../assets/images/radioboxMarked";
import Radiobox from "../../assets/images/radiobox";
import {LocationSelector} from "../../components/LocationSelector";

export function LocationScreen({navigation, route}: {navigation: any, route: any}) {

    return (
        <>
            <StackNavigationHeader title={'Location'} navigation={navigation} route={route} />
            <LocationSelector />
        </>
    )

}
