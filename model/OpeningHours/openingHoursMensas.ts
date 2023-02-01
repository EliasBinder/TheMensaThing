import {openingHourDay} from "./openingHourDay";
import {openingHoursMensa} from "./openingHoursMensa";


export class openingHoursMensas {
    public openingHoursMensas: {
        [key: string]: openingHoursMensa;
    } = {};

    constructor() {}

    public buildRelationalModel(obj: any[]) {
        obj.forEach((openingHoursMensaRef) => {
            const newOpeningHoursMensa = new openingHoursMensa(openingHoursMensaRef.mensa_location);
            this.openingHoursMensas[openingHoursMensaRef.mensa_location] = newOpeningHoursMensa;
            newOpeningHoursMensa.buildRelationalModel(openingHoursMensaRef);
        });
    }

    public getMensaLocations(): string[] {
        return Object.keys(this.openingHoursMensas);
    }
}
