import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {menuItem} from "../model/menu/menuItem";

export const usePreferredDishes = () => {
    const [preferredDishes, setPreferredDishes] = useState([] as menuItem[]);

    useEffect(() => {
        AsyncStorage.getItem('preferredDishes').then((value) => {
            if (value !== null) {
                setPreferredDishes(JSON.parse(value));
            }else{
                _setPreferredDishes([]);
            }
        });
    }, []);

    const _setPreferredDishes = (dishes: menuItem[]) => {
        AsyncStorage.setItem('preferredDishes', JSON.stringify(dishes))
            .then(() => {
                setPreferredDishes(dishes);
            });
    }

    return [preferredDishes, _setPreferredDishes] as [menuItem[], (dishes: menuItem[]) => void];
}
