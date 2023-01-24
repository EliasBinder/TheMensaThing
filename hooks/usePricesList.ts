import {useEffect, useState} from "react";
import {AZURE_INSTANCE} from "../util/AuthUtil";
import {menus} from "../model/prices/menus";

export const usePricesList = () => {
    const [pricesList, setPricesList] = useState(undefined as menus|undefined)

    useEffect(() => {
        if (AZURE_INSTANCE.isLoggedIn()) {
            AZURE_INSTANCE.getPriceList().then((pricesList) => {
                const _menus = new menus();
                _menus.buildRelationalModel(pricesList);
                setPricesList(_menus);
            });
        }
    }, []);

    return pricesList
}
