import {Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {globalColors, globalStyles} from "../util/StyleUtil";
import MapView from 'react-native-maps';
import TuneIcon from "../assets/images/tune";
import { BottomSheet } from 'react-native-btr';
import CloseIcon from "../assets/images/close";
import {LocationSelector} from "../components/LocationSelector";
import {Header} from "../components/Header";
import {LocationSelectorSheet} from "../components/LocationSelectorSheet";
import LegacyRef = Animated.LegacyRef;
const { height, width } = Dimensions.get( 'window' );


export function MapScreen() {

    const [changeLocationModal, setChangeLocationModal] = useState(false);

    const LATITUDE_DELTA = 0.0007;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

    const mapRef = React.createRef<MapView>();

    const [region, setRegion] = useState('BZ');

    useEffect(() => {
        let targetLongitude = 11.350881422863015;
        let targetLatitude = 46.498151497897666;
        let delta = 0.0007;
        switch (region) {
            case 'BZ':
                targetLongitude = 11.350881422863015;
                targetLatitude = 46.498151497897666;
                delta = 0.0007;
                break;
            case 'BX':
                targetLongitude = 11.6534885;
                targetLatitude = 46.715127;
                delta = 0.0014;
                break;
            case 'BK':
                targetLongitude = 11.343750000000002;
                targetLatitude = 46.49999999999999;
                break;
        }
        mapRef.current?.animateToRegion({
            latitude: targetLatitude,
            longitude: targetLongitude,
            latitudeDelta: delta,
            longitudeDelta: delta * (width / height)
        })
        setChangeLocationModal(false)
    }, [region]);

    return (
        <View style={[globalStyles.container, styles.root]}>
            <Header title={'Map'} icon={
                <TouchableOpacity style={styles.tuneContainer} onPress={() => setChangeLocationModal(true)}>
                    <TuneIcon color={'#fff'} dim={30}/>
                </TouchableOpacity>
            }/>
            <LocationSelectorSheet visible={changeLocationModal} setVisible={setChangeLocationModal} location={region} setLocation={setRegion}/>
            <View style={styles.mapContainer}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 46.498151497897666,
                    longitude: 11.350881422863015,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }} zoomEnabled={false} provider={"google"} ref={mapRef} scrollEnabled={false}>
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
    }
});
