import {Animated, Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {globalColors, globalStyles} from "../util/StyleUtil";
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
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

    const initialRegion = {
        latitude: 46.4981567,
        longitude: 11.3507305,
        latitudeDelta: 0.0009,
        longitudeDelta: 0.0009 * (width / height),
    }

    const mapRef = React.createRef<MapView>();

    const [region, setRegion] = useState('BZ');

    useEffect(() => {
        let targetLongitude = 0;
        let targetLatitude = 0;
        let delta = 0;
        switch (region) {
            case 'BZ':
                targetLongitude = initialRegion.longitude;
                targetLatitude = initialRegion.latitude;
                delta = initialRegion.latitudeDelta;
                break;
            case 'BX':
                targetLongitude = 11.6534885;
                targetLatitude = 46.715127;
                delta = 0.0014;
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
                <MapView style={styles.map} initialRegion={initialRegion} zoomEnabled={false} provider={PROVIDER_GOOGLE} ref={mapRef} scrollEnabled={false}>
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
