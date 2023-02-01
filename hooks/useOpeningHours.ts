import {useEffect, useState} from "react";
import {AZURE_INSTANCE} from "../util/AuthUtil";

export const useOpeningHours = (location: "BZ"|"BX"|"BK") => {

    const [openingHours, setOpeningHours] = useState({
        isCurrentlyOpen: false,
        openingHours: '',
    });

    const fetchOpeningHours = (location3: "BZ"|"BX"|"BK") => {
        if (AZURE_INSTANCE.isLoggedIn()) {
            AZURE_INSTANCE.getOpeningHours(location3).then((openingHours) => {
                console.log("Opening hours: ", openingHours);
                setOpeningHours({
                    isCurrentlyOpen: openingHours.IsCurrentlyOpen,
                    openingHours: openingHours.LiteralDescription.trimEnd().replace("\n", " and "),
                });
            });
        }
    }

    useEffect(() => {
        fetchOpeningHours(location)
    }, []);

    const _setOpeningHours = (location2: "BZ"|"BX"|"BK") => {
        fetchOpeningHours(location2)
    }

    return [openingHours, _setOpeningHours] as [typeof openingHours, (location: "BZ"|"BX"|"BK") => void];
}
