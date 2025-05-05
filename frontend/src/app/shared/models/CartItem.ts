import { Food } from "./Food";

export class CartItem {

    price: number = 0;

    constructor(public food: Food) {
        this.price = food.price;
    }

    quantity: number = 1;
}