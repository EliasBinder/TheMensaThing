import {Text, View, StyleSheet} from "react-native";
import React from "react";
import {globalStyles} from "../util/StyleUtil";
import ProfileIcon from "../assets/images/profile";

export function ProfileScreen() {
    return (
        <View style={[globalStyles.container, styles.root]}>
            <View style={styles.title}>
                <Text style={globalStyles.header1}>Profile</Text>
                <View style={styles.imgContainer}>
                    <ProfileIcon color={'#fff'}  dim={48}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        paddingVertical: 35,
        paddingHorizontal: 26,
        marginTop: 35,
        backgroundColor: '#040F21',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start",
        width: '100%',
    },
    imgContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#081D40',
        borderRadius: 15,
        width: 60,
        maxWidth: 60,
        height: 60,
        maxHeight: 60,
        marginLeft: 'auto',
    }
})
