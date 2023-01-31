import React from "react";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {globalStyles} from "../../util/StyleUtil";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
            <View style={[globalStyles.container, styles.container]}>
                <Text style={styles.text}>
                    We use your GPS data to find the best restaurants for you.
                </Text>
                <Toggle/>
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
    }
});
