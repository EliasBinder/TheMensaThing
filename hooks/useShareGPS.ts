import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useShareGPS = () => {
    const [shareGPS, setShareGPS] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('shareGPS').then((value) => {
            if (value === 'true') {
                setShareGPS(true);
            }
        });
    }, []);

    const toggleShareGPS = () => {
        const newValue = !shareGPS;
        AsyncStorage.setItem('shareGPS', newValue.toString())
            .then(() => {
                setShareGPS(newValue);
            });
    }

    return [shareGPS, toggleShareGPS] as [boolean, () => void];
}
