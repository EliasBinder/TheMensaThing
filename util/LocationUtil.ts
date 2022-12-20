import {LocationGeofencingRegionState} from "expo-location";

export const mensaLocations = [
    {
        /*
        latitude: 46.497816,
        longitude: 11.349857,
         */
        identifier: 'Mensa BZ',
        latitude: 46.4983,
        longitude: 11.3502,
        radius: 10,
        notifyOnEnter: true,
        notifyOnExit: true,
        state: LocationGeofencingRegionState.Unknown
    },
    {
        identifier: 'Mensa BX',
        latitude: 46.7150,
        longitude: 11.6530,
        radius: 10,
        notifyOnEnter: true,
        notifyOnExit: true,
        state: LocationGeofencingRegionState.Unknown
    },
];

