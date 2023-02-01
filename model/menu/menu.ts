import { menuItem } from './menuItem';

export class menu {

    public firstCourses: menuItem[] = [];
    public mainCourses: menuItem[] = [];

    constructor() {}

    public buildRelationalModel(obj: any) {
        if (!obj.data)
            return;
        for (let menuItemRef of obj.data) {
            const menuItemEntry = new menuItem();
            menuItemEntry.buildRelationalModel(menuItemRef);
            switch (menuItemRef.type) {
                case "First courses":
                    this.firstCourses.push(menuItemEntry);
                    break;
                case "Second courses":
                    this.mainCourses.push(menuItemEntry);
                    break;
            }
        }
    }

}
