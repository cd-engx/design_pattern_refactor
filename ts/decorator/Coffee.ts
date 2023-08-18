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

    constructor(size: string,  cost: number) {
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

class MakeCoffee implements IDrink{
    ingredient: IDrink;
    size: string;
    cost: number;

    constructor(ingredient:  IDrink, size: string,  cost: number) {
        this.ingredient = ingredient;
        this.size = size;
        this.cost = cost;
    }

    getDescription(): string {
        return "this coffe is with " + this.ingredient.getDescription();
    }

    getCost(): number {
        return this.cost + this.ingredient.cost;
    }

}

const milk = new Milk("big", 12);
const sugar = new Sugar("middle", 20);

const coffeWithMilk = new MakeCoffee(milk, "big", 90);
const coffeWithSugar = new MakeCoffee(sugar, "small", 120);

coffeWithMilk.getCost();
coffeWithMilk.getDescription();

coffeWithSugar.getCost();
coffeWithSugar.getDescription();

// todo: consider to decorator Coffee with sugar, with milk.