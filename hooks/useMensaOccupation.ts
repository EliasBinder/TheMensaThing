import {useEffect, useState} from "react";

export const useMensaOccupation = (location: "BZ"|"BX"|"BK") => {

    const [occupation, setOccupation] = useState(0);

    const fetchOccupation = (location3: "BZ"|"BX"|"BK") => {
        fetch(`http://api.mensa/occupancy/${location3}`)
            .then(response => response.json())
            .then(data => {
                setOccupation(data.occupancy)
            })
            .catch(err => setOccupation(0));
    }

    useEffect(() => {
        fetchOccupation(location)
    }, []);

    //for updating the occupation without reloading the page
    const _setOccupation = (location2: "BZ"|"BX"|"BK") => {
        fetchOccupation(location2)
    }

    return [occupation, _setOccupation] as [typeof occupation, (location: "BZ"|"BX"|"BK") => void];
}
