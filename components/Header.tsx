import {Animated, View, StyleSheet} from "react-native";
import {globalColors, globalStyles} from "../util/StyleUtil";
import React, {ReactNode, useRef} from "react";

interface propType {
    title: string,
    icon?: ReactNode
}

export function Header({title, icon}: propType) {

    const topbarAddAnim = useRef(new Animated.Value(0)).current;

    //Add animation
    React.useEffect(() => {
        Animated.timing(
            topbarAddAnim,
            {
                useNativeDriver: false,
                toValue: 1,
                duration: 400,
            }
        ).start()
    }, [topbarAddAnim]);

    return (
        <View style={styles.title}>
            <Animated.Text style={[globalStyles.header1, {opacity: topbarAddAnim}]}>{title}</Animated.Text>
            {icon ? (<Animated.View style={[styles.imgContainer, {transform: [{scale: topbarAddAnim}]}]}>
                {icon}
            </Animated.View>) : (<View style={{marginLeft: 'auto'}}></View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 15,
        paddingHorizontal: 26,
        backgroundColor: globalColors.primary,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start",
        width: '100%',
    },
    imgContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalColors.secondary,
        borderRadius: 15,
        width: 60,
        maxWidth: 60,
        height: 60,
        maxHeight: 60,
        marginLeft: 'auto',
        overflow: 'hidden'
    }
})
