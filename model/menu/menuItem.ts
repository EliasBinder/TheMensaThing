export class menuItem {

    public allergens: number[] = []
    public name: string = ""
    public imageUrl: string = ""

    constructor() {}

    public buildRelationalModel(obj: any) {
        this.name = obj.name;
        this.imageUrl = obj.imageUrl;
        this.allergens = obj.allergens.map((allergen: number) => {
            switch (allergen) {
                case 7:
                    return 3;
                case 9:
                    return 2;
                case 24:
                    return 4;
                case 3:
                    return 6;
                case 19:
                    return 1;
                case 18:
                    return 7;
                case 10:
                    return 3; //FIXME: 10 is not milk
                case 4:
                    return 5;
                case 6:
                    return 8;
                case 11:
                    return 10;
                case undefined:
                    return 9;
            }
        });
    }
}
