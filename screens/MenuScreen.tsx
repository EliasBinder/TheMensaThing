import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import {styles} from "../screens/DashboardScreen";
import {scale} from "../util/ScaleUtil";
import {Card} from "../components/Card";
import Tune from "../assets/images/tune";
import TuneIcon from "../assets/images/tune";
import {OccupationBar} from "../components/DashboardScreen/OccupationBar";

export function MenuScreen(){
    return (
        <View style={globalStyles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <View style={styles.cardRow}>
                    <Card
                        title={"Today's Menu"}
                        icon={<Image style={menu.icon} source={require('../assets/images/fork&knife.svg')}></Image>}
                        interaction={
                        <TouchableOpacity style={{marginLeft: 'auto'}}>
                            <TuneIcon color={"#E6E6E6"} dim={25}/>
                        </TouchableOpacity>}
                    >
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Main Couse</Text>
                        </View>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Second Course</Text>
                        </View>
                    </Card>
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
 