import {menuItemEnty} from "./menuItemEntry";

export class menuItem {

    public menuItemEntries: menuItemEnty[] = [];

    constructor(public name: string, public price: number, public locations: string[]) {}

    public buildRelationalModel(obj: any) {
        obj.PositionTypes.forEach((menuItemEntryRef: any) => {
            const newMenuItemEntry = new menuItemEnty(menuItemEntryRef.NameEn);
            this.menuItemEntries.push(newMenuItemEntry);
        });
    }
}
