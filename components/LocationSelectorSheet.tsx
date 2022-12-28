import {globalColors, Icon} from "../util/StyleUtil";
import {TouchableOpacity, View, StyleSheet} from "react-native";
import CloseIcon from "../assets/images/close";
import {LocationSelector} from "./LocationSelector";
import {BottomSheet} from "react-native-btr";
import React from "react";


export function LocationSelectorSheet({visible, setVisible, location, setLocation}: {visible: boolean, setVisible: Function, location: string, setLocation: Function}) {
    return (
        <BottomSheet
            visible={visible}
            onBackButtonPress={() => {setVisible(false)}}
            onBackdropPress={() => {setVisible(false)}}
        >
            <View style={styles.changeLocRoot}>
                <View style={styles.changeLocHeader}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Icon name={"close"} color={"#fff"} size={35}/>
                    </TouchableOpacity>
                </View>
                <LocationSelector location={location} setLocation={setLocation}/>
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    changeLocRoot: {
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        height: 270,
        backgroundColor: globalColors.primary
    },
    changeLocHeader: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingTop: 25,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 5,
        width: '100%',
        backgroundColor: globalColors.primary
    }
});
