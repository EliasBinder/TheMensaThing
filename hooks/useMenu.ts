import {useEffect, useState} from "react";
import {menu} from "../model/menu/menu";

export const useMenu = (location: "BZ"|"BX"|"BK") => {
    const [menuState, setMenuState] = useState(undefined as menu|undefined)

    const fetchMenu = (location: "BZ"|"BX"|"BK") => {
        fetch("https://europe-west1-unibz-mensapp.cloudfunctions.net/menu/" + location, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((json) => {
                const _menu = new menu();
                _menu.buildRelationalModel(json);
                setMenuState(_menu);
            })
    }

    useEffect(() => {
        fetchMenu(location)
    }, []);

    const _setMenuState = (location: "BZ"|"BX"|"BK") => {
        fetchMenu(location);
    }

    return [menuState, _setMenuState] as [menu, (location: "BZ"|"BX"|"BK") => void]
}
