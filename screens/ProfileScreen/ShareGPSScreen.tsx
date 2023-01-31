import React from "react";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {globalColors, globalStyles} from "../../util/StyleUtil";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useShareGPS} from "../../hooks/useShareGPS";
import {Icon} from "../../components/Icon";
import {scale} from "../../util/ScaleUtil";

export function ShareGPSScreen({navigation}: {navigation: any}) {

    const [shareGPS, toggleShareGPS] = useShareGPS();

    const Toggle = () => {
        return (
            <TouchableOpacity onPress={() => toggleShareGPS()}>
                {shareGPS ?
                    (<Icon name={"toggle_on"} color={'#3AF90A'} size={50} />) :
                    (<Icon name={"toggle_off"} color={'#F93A3A'} size={50} />)
                }
            </TouchableOpacity>
        )
    }

    return (
        <>
            <StackNavigationHeader title={'Share GPS'} navigation={navigation}/>
            <View style={styles.backgroundView}>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        We use your location in order to estimate the occupation of the mensa. The data is stored anonymously,
                        we only store that a person has entered or left the mensa at a certain time. The more people share
                        their location, the more accurate the data is. If you don't want to share your location, you can
                        disable it here.
                    </Text>
                    <Toggle/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: scale(40),
        paddingBottom: scale(40),
    },
    text: {
        color: '#fff',
        fontSize: scale(20),
        padding: scale(30),
    },
    backgroundView: {
        backgroundColor: globalColors.primary,
        padding: scale(10),
        flex: 1,
    },
    textView: {
        flexDirection: "column",
        paddingHorizontal: scale(10),
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "center",
        marginTop: scale(50),
        borderRadius: scale(20),
        backgroundColor: globalColors.secondary,
    },
});
