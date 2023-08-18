interface IDrink {
    size: string;
    cost: number;
    getCost(): number;
    getDescription(): string
}



class Milk implements IDrink {
    size: string;
    cost: number;

    constructor(size: string,  cost: number) {
        this.size = size;
        this.cost = cost;
    }

    getDescription(): string {
        return "the is milk and the size of it  is" + this.size; 
    }

    getCost(): number {
        return this.cost;
    }

}

class Sugar implements IDrink {
    size: string;
    cost: number;

    constructor(size: string,  cost: number, ) {
        this.size = size;
        this.cost = cost;
    }

    getDescription(): string {
        return "the is sugar and the size of it is" + this.size; 
    }

    getCost(): number {
        return this.cost;
    }

}

class Coffee implements IDrink{
    size: string;
    cost: number;
    protected ingredient: IDrink;

    constructor(size: string, cost: number, ingredient: IDrink) {
        this.size = size;
        this.cost = cost;
        this.ingredient = ingredient;
    }

    getDescription(): string {
        return this.ingredient.getDescription() + "this coffe is with " ;
    }

    getCost(): number {
        return this.cost + this.ingredient.getCost() ;
    }

}
 
 
const milk = new Milk("big", 33);
const sugar = new Sugar("big", 33);

const coffeeWithMilk = new Coffee("small", 34, milk);
const coffeeWithSugar = new Coffee("large", 55, sugar);
 

// todo: consider to decorator Coffee with sugar, with milk.