export class menuItem {

    public allergens: number[] = []
    public name: string = ""
    public imageUrl: string = ""

    constructor() {}

    public buildRelationalModel(obj: any) {
        this.name = obj.name;
        this.imageUrl = obj.imageUrl;
        this.allergens = obj.allergens; //TODO map allergens
    }
}
