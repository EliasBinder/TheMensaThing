import {useEffect, useState} from "react";
import {AZURE_INSTANCE} from "../util/AuthUtil";

export const useBalance = () => {
    const [balance, setBalance] = useState('Loading...')

    useEffect(() => {
        if (AZURE_INSTANCE.isLoggedIn()) {
            AZURE_INSTANCE.getMoney().then((money) => {
                setBalance(money.StatusDescription.substring(0, money.StatusDescription.length-2) + '€')
            });
        }
    }, []);

    return balance
}
