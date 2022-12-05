import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {styles} from "../screens/DashboardScreen";
import {Card} from "../components/Card";
import Icon from "../assets/images/fork&knife";
import {MenuPrimi} from "../components/MenuScreen/MenuPrimi";
import {MenuSecondi} from "../components/MenuScreen/MenuSecondi";

export function MenuScreen(){
    return (
        <View style={globalStyles.container}>
            <View style={styles.title}>
                <Text style={globalStyles.header1}>Today's Menu</Text>
                <View style={styles.imgContainer}>
                    <Icon color={'#ffffff'}/>
                </View>
            </View>    

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <View style={styles.cardRow}>
                    <MenuPrimi/>
                </View>
                <View style={[styles.cardRow, {marginTop: 20}]}>
                    <MenuSecondi/>
                </View>         
            </ScrollView>
        </View>
    )
}

const menu = StyleSheet.create({
    icon: {
        dim: 25,
        height: 'auto',
    },
});