class PizzaOrder {
    private pizzaType: string;
    private size: string;
    private crustType: string;
    private extraCheese: boolean;
    private pepperoni: boolean;
    private mushrooms: boolean;

    constructor(builder: PizzaOrderBuilder) {
        this.pizzaType = builder.pizzaType;
        this.size = builder.size;
        this.crustType = builder.crustType;
        this.extraCheese = builder.extraCheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
    }

}

class PizzaOrderBuilder {
    public pizzaType: string = "";
    public size: string = "";
    public crustType: string = "";
    public extraCheese: boolean = false;
    public pepperoni: boolean = false;
    public mushrooms: boolean = false;

    setPizzaType(pizzaType: string): PizzaOrderBuilder {
        this.pizzaType = pizzaType;
        return this;
    }

    setSize(size: string): PizzaOrderBuilder {
        this.size = size;
        return this;
    }

    setCrustType(crustType: string): PizzaOrderBuilder {
        this.crustType = crustType;
        return this;
    }

    setExtraCheese(extraCheese: boolean): PizzaOrderBuilder {
        this.extraCheese = extraCheese;
        return this;
    }

    setPepperoni(pepperoni: boolean): PizzaOrderBuilder {
        this.pepperoni = pepperoni;
        return this;
    }

    setMushrooms(mushrooms: boolean): PizzaOrderBuilder {
        this.mushrooms = mushrooms;
        return this;
    }

    build(): PizzaOrder {
        return new PizzaOrder(this);
    }
}

// Usage
const order = new PizzaOrderBuilder()
    .setPizzaType("Margherita")
    .setSize("Medium")
    .setCrustType("Thin")
    .setExtraCheese(true)
    .setPepperoni(true)
    .build();

console.log(order);
