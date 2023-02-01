import {useEffect, useState} from "react";
import {AZURE_INSTANCE} from "../util/AuthUtil";

export const useOpeningHours = () => {
    const [openingHours, setOpeningHours] = useState({
        BZ: {
            monday: {
                open_noon: '11:30',
                close_noon: '14:30',
                open_evening: '18:30',
                close_evening: '20:30'
            },
            tuesday: {
                open_noon: '11:30',
                close_noon: '14:30',
                open_evening: '18:30',
                close_evening: '20:30'
            },
            wednesday: {
                open_noon: '11:30',
                close_noon: '14:30',
                open_evening: '18:30',
                close_evening: '20:30'
            },
            thursday: {
                open_noon: '11:30',
                close_noon: '14:30',
                open_evening: '18:30',
                close_evening: '20:30'
            },
            friday: {
                open_noon: '11:30',
                close_noon: '14:30',
                open_evening: '18:30',
                close_evening: '20:30'
            },
            saturday: {
                open_noon: '11:30',
                close_noon: '14:30',
                open_evening: '-',
                close_evening: '-'
            },
            sunday: {
                open_noon: '-',
                close_noon: '-',
                open_evening: '-',
                close_evening: '-'
            }
        },
        BX: {
            monday: {
                open_noon: '11:45',
                close_noon: '14:30',
                open_evening: '-',
                close_evening: '-'
            },
            tuesday: {
                open_noon: '11:45',
                close_noon: '14:30',
                open_evening: '-',
                close_evening: '-'
            },
            wednesday: {
                open_noon: '11:45',
                close_noon: '14:30',
                open_evening: '-',
                close_evening: '-'
            },
            thursday: {
                open_noon: '11:45',
                close_noon: '14:30',
                open_evening: '-',
                close_evening: '-'
            },
            friday: {
                open_noon: '11:45',
                close_noon: '14:30',
                open_evening: '-',
                close_evening: '-'
            },
            saturday: {
                open_noon: '11:45',
                close_noon: '14:30',
                open_evening: '-',
                close_evening: '-'
            },
            sunday: {
                open_noon: '-',
                close_noon: '-',
                open_evening: '-',
                close_evening: '-'
            }
        },
        BK: {
            monday: {
                open_noon: '11:30',
                close_noon: '12:30',
                open_evening: '-',
                close_evening: '-'
            },
            tuesday: {
                open_noon: '11:30',
                close_noon: '12:30',
                open_evening: '-',
                close_evening: '-'
            },
            wednesday: {
                open_noon: '11:30',
                close_noon: '12:30',
                open_evening: '-',
                close_evening: '-'
            },
            thursday: {
                open_noon: '11:30',
                close_noon: '12:30',
                open_evening: '-',
                close_evening: '-'
            },
            friday: {
                open_noon: '11:30',
                close_noon: '12:30',
                open_evening: '-',
                close_evening: '-'
            },
            saturday: {
                open_noon: '11:30',
                close_noon: '12:30',
                open_evening: '-',
                close_evening: '-'
            },
            sunday: {
                open_noon: '11:30',
                close_noon: '12:30',
                open_evening: '-',
                close_evening: '-'
            }
        }
    })

    useEffect(() => {
    }, []);

    return openingHours;
}
