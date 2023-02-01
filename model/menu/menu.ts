import { menuItem } from './menuItem';

export class menu {

    public firstCourses: menuItem[] = [];
    public mainCourses: menuItem[] = [];
    public pizza: menuItem[] = [];

    constructor() {
        // Pizza Margherita
        const pizzaMargherita = new menuItem();
        pizzaMargherita.name = "Pizza Margherita";
        pizzaMargherita.imageUrl = "https://unibz.markas.info/images/piatti/98111-pizza-margherita.jpg";
        pizzaMargherita.allergens = [];
        this.pizza.push(pizzaMargherita);

        //Pizza al Prosciutto
        const pizzaProsciutto = new menuItem();
        pizzaProsciutto.name = "Pizza al Prosciutto";
        pizzaProsciutto.imageUrl = "https://unibz.markas.info/images/piatti/155702-pizza-al-prosciutto.jpg";
        pizzaProsciutto.allergens = [];
        this.pizza.push(pizzaProsciutto);

        //Pizza ai Funghi
        const pizzaFunghi = new menuItem();
        pizzaFunghi.name = "Pizza al Funghi";
        pizzaFunghi.imageUrl = "https://unibz.markas.info/images/piatti/155701-pizza-ai-funghi.jpg";
        pizzaFunghi.allergens = [];
        this.pizza.push(pizzaFunghi);

        //Pizza ai Carciofi
        const pizzaCarciofi = new menuItem();
        pizzaCarciofi.name = "Pizza ai Carciofi";
        pizzaCarciofi.imageUrl = "https://unibz.markas.info/images/piatti/155700-pizza-ai-carciofi.jpg";
        pizzaCarciofi.allergens = [];
        this.pizza.push(pizzaCarciofi);

        //Pizza Prosciutto e Funghi
        const pizzaProsciuttoFunghi = new menuItem();
        pizzaProsciuttoFunghi.name = "Pizza Prosciutto e Funghi";
        pizzaProsciuttoFunghi.imageUrl = "https://unibz.markas.info/images/piatti/98114-pizza-prosciutto-e-funghi.jpg";
        pizzaProsciuttoFunghi.allergens = [];
        this.pizza.push(pizzaProsciuttoFunghi);

        //Pizza Capricciosa
        const pizzaCapricciosa = new menuItem();
        pizzaCapricciosa.name = "Pizza Capricciosa";
        pizzaCapricciosa.imageUrl = "https://unibz.markas.info/images/piatti/98112-pizza-capricciosa.jpg";
        pizzaCapricciosa.allergens = [];
        this.pizza.push(pizzaCapricciosa);

        //Pizza Salamino
        const pizzaSalamino = new menuItem();
        pizzaSalamino.name = "Pizza Salamino";
        pizzaSalamino.imageUrl = "https://unibz.markas.info/images/piatti/98115-pizza-salamino.jpg";
        pizzaSalamino.allergens = [];
        this.pizza.push(pizzaSalamino);

        //Pizza Diavola
        const pizzaDiavola = new menuItem();
        pizzaDiavola.name = "Pizza Diavola";
        pizzaDiavola.imageUrl = "https://unibz.markas.info/images/piatti/98115-pizza-salamino.jpg";
        pizzaDiavola.allergens = [];
        this.pizza.push(pizzaDiavola);

        //Pizza alla Cipolla
        const pizzaCipolla = new menuItem();
        pizzaCipolla.name = "Pizza alla Cipolla";
        pizzaCipolla.imageUrl = "https://unibz.markas.info/images/piatti/98116-pizza-tonno-e-cipolla.jpg";
        pizzaCipolla.allergens = [];
        this.pizza.push(pizzaCipolla);

        //Pizza alle Mellanzane
        const pizzaMelanzane = new menuItem();
        pizzaMelanzane.name = "Pizza alle Mellanzane";
        pizzaMelanzane.imageUrl = "https://unibz.markas.info/images/piatti/180685-pizza-alle-verdure.jpg";
        pizzaMelanzane.allergens = [];
        this.pizza.push(pizzaMelanzane);

        //Pizza ai Pepperoni
        const pizzaPepperoni = new menuItem();
        pizzaPepperoni.name = "Pizza ai Pepperoni";
        pizzaPepperoni.imageUrl = "https://unibz.markas.info/images/piatti/180685-pizza-alle-verdure.jpg";
        pizzaPepperoni.allergens = [];
        this.pizza.push(pizzaPepperoni);

        //Pizza alle Zucchine
        const pizzaZucchine = new menuItem();
        pizzaZucchine.name = "Pizza alle Zucchine";
        pizzaZucchine.imageUrl = "https://unibz.markas.info/images/piatti/180685-pizza-alle-verdure.jpg";
        pizzaZucchine.allergens = [];
        this.pizza.push(pizzaZucchine);

        //Pizza alle Verdure
        const pizzaVerdure = new menuItem();
        pizzaVerdure.name = "Pizza alle Verdure";
        pizzaVerdure.imageUrl = "https://unibz.markas.info/images/piatti/180685-pizza-alle-verdure.jpg";
        pizzaVerdure.allergens = [];
        this.pizza.push(pizzaVerdure);

        //Pizza Rossa alle Verdure
        const pizzaRossaVerdure = new menuItem();
        pizzaRossaVerdure.name = "Pizza Rossa alle Verdure (VEGAN)";
        pizzaRossaVerdure.imageUrl = "https://unibz.markas.info/images/piatti/98117-pizza-rossa-alle-verdure.jpg";
        pizzaRossaVerdure.allergens = [];
        this.pizza.push(pizzaRossaVerdure);
    }

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
