import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {eatingHabitsMap} from "../util/EatingHabitsUtil";

export const useEatingHabits = () => {
    const [eatingHabits, setEatingHabits] = useState([] as number[]);

    useEffect(() => {
        AsyncStorage.getItem('eatingHabits').then((value) => {
            if (value !== null) {
                setEatingHabits(JSON.parse(value));
            }else {
                const defaultArray = Object.keys(eatingHabitsMap).map((key, index) => index);
                _setEatingHabits(defaultArray);
            }
        });
    }, []);

    const _setEatingHabits = (eatingHabits: number[]) => {
        console.log("Setting eating habits to: " + eatingHabits);
        AsyncStorage.setItem('eatingHabits', JSON.stringify(eatingHabits))
            .then(() => {
                setEatingHabits(eatingHabits);
            });
    }

    return [eatingHabits, _setEatingHabits] as [number[], (eatingHabits: number[]) => void];
}
