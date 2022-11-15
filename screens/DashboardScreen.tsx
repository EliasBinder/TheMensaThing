import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../util/StyleUtil";

const DashboardScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header1}>Dashboard Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#040F21',
        flex: 1
    }
});

export default DashboardScreen
