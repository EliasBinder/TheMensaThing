import {globalStyles} from "../util/StyleUtil";
import {Text, View, StyleSheet, Animated} from "react-native";
import React, {useEffect, useRef} from "react";

export function Card({title, icon, interaction, index, children}:{title: string, icon: any, interaction?: any, index?: number, children: any}) {

    const addAnim = useRef(new Animated.Value(50)).current;

    //Add animation
    useEffect(() => {
        Animated.timing(
            addAnim,
            {
                useNativeDriver: false,
                toValue: 0,
                duration: 400,
                delay: index ? index * 200 : 0
            }
        ).start()
    }, [addAnim])

    return (
        <Animated.View style={[globalStyles.box, styles.box, {marginTop: addAnim}]}>
            <View style={styles.topBar}>
                {icon ? icon : <></>}
                <Text style={[styles.title, {marginLeft: icon ? 20 : 0}]}>{title}</Text>
                {interaction ? interaction : <View style={{marginLeft: 'auto'}}></View>}
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: "column",
        width: '100%',
        justifyContent: "flex-start",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
    },
    title: {
        color: "#fff",
        fontSize: 25,
        fontFamily: "Poppins_SemiBold"
    },
    content: {
        marginTop: 30,
        alignSelf: "stretch"
    }
});
