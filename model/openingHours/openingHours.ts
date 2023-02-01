import {openingHoursEntry} from "./openingHoursEntry";

export class openingHours {

    public openingHoursEntries: openingHoursEntry[] = [];

    constructor(public open_noon: string, public close_noon: string, public open_evening: string, public close_evening: string) {}

    public buildRelationalModel(obj: any) {
        obj.openingHoursEntries.forEach((objectHoursEntryRef: any) => {
            const newOpeningHoursEntry = new openingHoursEntry(objectHoursEntryRef.time);
            this.openingHoursEntries.push(new openingHoursEntry(objectHoursEntryRef.time));
        });
    }
}
