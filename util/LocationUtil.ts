import {LocationGeofencingRegionState} from "expo-location";

export const mensaLocations = [
    {
        /*
        latitude: 46.497816,
        longitude: 11.349857,
         */
        identifier: 'BZ',
        latitude: 46.4983,
        longitude: 11.3502,
        radius: 10,
        notifyOnEnter: true,
        notifyOnExit: true,
        state: LocationGeofencingRegionState.Unknown
    },
    {
        identifier: 'BX',
        latitude: 46.7150,
        longitude: 11.6530,
        radius: 10,
        notifyOnEnter: true,
        notifyOnExit: true,
        state: LocationGeofencingRegionState.Unknown
    },
    {
        identifier: 'BK',
        latitude: 46.4990,
        longitude: 11.3540,
        radius: 10,
        notifyOnEnter: true,
        notifyOnExit: true,
        state: LocationGeofencingRegionState.Unknown
    }
];

