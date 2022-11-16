import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";

const DashboardScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header1}>Dashboard Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.primary,
        flex: 1
    }
});

export default DashboardScreen
