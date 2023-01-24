import {menuItem} from "./menuItem";

export class menu {
    public menuItems: menuItem[] = [];

    constructor(public name: string) {}

    public buildRelationalModel(obj: any) {
        obj.MenuList.forEach((menuItemRef: any) => {
            const newMenuItemLocations: string[] = menuItemRef.Locations.map((location: any) => location.Code);
            const newMenuItem = new menuItem(
                menuItemRef.NameEn,
                menuItemRef.FinalPrice,
                newMenuItemLocations
            );
            newMenuItem.buildRelationalModel(menuItemRef);
            this.menuItems.push(newMenuItem);
        });
    }
}
