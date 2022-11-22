import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {globalColors, globalStyles} from "../util/StyleUtil";
import MapView from 'react-native-maps';
import TuneIcon from "../assets/images/tune";
import { BottomSheet } from 'react-native-btr';
import CloseIcon from "../assets/images/close";
import {LocationSelector} from "../components/LocationSelector";
const { height, width } = Dimensions.get( 'window' );


export function MapScreen() {

    const [changeLocationModal, setChangeLocationModal] = useState(false);

    const LATITUDE_DELTA = 0.0007;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

    return (
        <View style={[globalStyles.container, styles.root]}>
            <View style={styles.title}>
                <Text style={globalStyles.header1}>Map</Text>
                <TouchableOpacity style={styles.tuneContainer} onPress={() => setChangeLocationModal(true)}>
                    <TuneIcon color={'#fff'} dim={30}/>
                </TouchableOpacity>
                <BottomSheet
                    visible={changeLocationModal}
                    onBackButtonPress={() => {setChangeLocationModal(false)}}
                    onBackdropPress={() => {setChangeLocationModal(false)}}
                >
                    <View style={styles.changeLocRoot}>
                        <View style={styles.changeLocHeader}>
                            <TouchableOpacity onPress={() => setChangeLocationModal(false)}>
                                <CloseIcon color={'#fff'} dim={35}/>
                            </TouchableOpacity>
                        </View>
                        <LocationSelector />
                    </View>
                </BottomSheet>
            </View>
            <View style={styles.mapContainer}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 46.498151497897666,
                    longitude: 11.350881422863015,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }} zoomEnabled={true} provider={"google"}>
                </MapView>
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
        backgroundColor: globalColors.primary
    },
    title: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 15,
        backgroundColor: globalColors.primary,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: '100%',
    },
    tuneContainer: {
        flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: globalColors.secondary,
            borderRadius: 15,
            width: 50,
            maxWidth: 50,
            height: 50,
            maxHeight: 50,
            marginLeft: 'auto',
    },
    mapContainer: {
        flex: 1,
        backgroundColor: globalColors.primary,
        alignItems: 'center',
        justifyContent: "flex-start",
        position: "absolute",
        zIndex: -1
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: globalColors.primary
    },
    changeLocRoot: {
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        height: 350,
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
