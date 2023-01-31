import React from "react";
import StackNavigationHeader from "../../components/StackNavigationHeader";
import {LocationSelector} from "../../components/LocationSelector";
import {usePreferredLocation} from "../../hooks/usePreferredLocation";

export function LocationScreen({navigation}: {navigation: any}) {

    const [preferredLocation, setPreferredLocation] = usePreferredLocation();

    return (
        <>
            <StackNavigationHeader title={'Location'} navigation={navigation}/>
            <LocationSelector location={preferredLocation} setLocation={setPreferredLocation}/>
        </>
    )

}
