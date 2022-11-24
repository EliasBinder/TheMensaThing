import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../util/StyleUtil";
import {styles} from "./DashboardScreen";
import {Card} from "../components/Card";
import TuneIcon from "../assets/images/tune";
import MenuIcon from "../assets/images/menu";

export function MenuScreen(){
    return (
        <View style={globalStyles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewInner}>
                <View style={styles.cardRow}>
                    <Card
                        title={"Today's Menu"}
                        icon={<MenuIcon color={'#fff'}/>}
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