import {openingHours} from "./openingHours";

export class openingHourDay{
    public openingHours: openingHours[] = [];

    constructor(public weekday: string) {}

    public buildRelationalModel(obj: any) {
        obj.openingHours.forEach((openingHoursRef: any) => {
            const newOpeningHours = new openingHours(
                openingHoursRef.open_noon,
                openingHoursRef.close_noon,
                openingHoursRef.open_evening,
                openingHoursRef.close_evening
            );
            newOpeningHours.buildRelationalModel(openingHoursRef);
            this.openingHours.push(newOpeningHours);
        });
    }
}
