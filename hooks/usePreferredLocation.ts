import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const usePreferredLocation = () => {
    const [preferredLocation, setPreferredLocation] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('preferredLocation').then((value) => {
            if (value !== null) {
                setPreferredLocation(value);
            }else{
                _setPreferredLocation('BZ');
            }
        });
    }, []);

    const _setPreferredLocation = (loc: string) => {
        AsyncStorage.setItem('preferredLocation', loc)
            .then(() => {
                setPreferredLocation(loc);
            });
    }

    return [preferredLocation, _setPreferredLocation] as ["BZ"|"BX"|"BK", (loc: "BZ"|"BX"|"BK") => void];
}
