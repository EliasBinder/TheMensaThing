import {menu} from "./menu";

export class menus {
    public menus: {
        [key: string]: menu;
    } = {};

    constructor() {}

    public buildRelationalModel(obj: any[]) {
        obj.forEach((menuRef) => {
            const newMenu = new menu(menuRef.NameEn);
            this.menus[menuRef.NameEn] = newMenu;
            newMenu.buildRelationalModel(menuRef);
        });
    }

    public getMenuNames(): string[] {
        return Object.keys(this.menus);
    }
}
