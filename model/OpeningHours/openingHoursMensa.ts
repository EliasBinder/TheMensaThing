import {openingHourDay} from "./openingHourDay";


export class openingHoursMensa {
    public openingHoursMensas: openingHourDay[] = [];

    constructor(public mensa_location: string) {}

    public buildRelationalModel(obj: any) {
        obj.openinHoursMensas.foreach((openingHoursDayRef: any) => {
            const newOpeningHoursDay = new openingHourDay(openingHoursDayRef.weekday);
            this.openingHoursMensas[openingHoursDayRef.weekday] = newOpeningHoursDay;
            newOpeningHoursDay.buildRelationalModel(openingHoursDayRef);
        });
    }
}
