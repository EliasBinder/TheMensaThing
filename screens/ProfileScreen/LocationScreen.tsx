import React from "react";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {LocationSelector} from "../../components/LocationSelector";
import {usePreferredLocation} from "../../hooks/usePreferredLocation";
import {View} from "react-native";
import {scale} from "../../util/ScaleUtil";

export function LocationScreen({navigation, route}: {navigation: any, route: any}) {

    const [preferredLocation, setPreferredLocation] = usePreferredLocation();

    return (
        <>
            <StackNavigationHeader title={'Location'} navigation={navigation} route={route} />
            <LocationSelector location={preferredLocation} setLocation={setPreferredLocation}/>
        </>
    )

}
