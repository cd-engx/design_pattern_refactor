/**
 * To refactor the PizzaOrder using the Builder pattern, 
 * we will create a PizzaOrderBuilder class that will be responsible for constructing PizzaOrder instances.
 */

class PizzaOrder {
    private pizzaType: string;
    private size: string;
    private crustType: string;
    private extraCheese: boolean;
    private pepperoni: boolean;
    private mushrooms: boolean;

    constructor(builder: PizzaOrderBuilder) {
        this.pizzaType = builder.getPizzaType();
        this.size = builder.getSize();
        this.crustType = builder.getCrustType();
        this.extraCheese = builder.getExtraCheese();
        this.pepperoni = builder.getPepperoni();
        this.mushrooms = builder.getMushrooms();
    }
}

class PizzaOrderBuilder {
    private pizzaType: string = "";
    private size: string = "";
    private crustType: string = "";
    private extraCheese: boolean = false;
    private pepperoni: boolean = false;
    private mushrooms: boolean = false;

    public setPizzaType(pizzaType: string): PizzaOrderBuilder {
        this.pizzaType = pizzaType;
        return this;
    }

    public setSize(size: string): PizzaOrderBuilder {
        this.size = size;
        return this;
    }

    public setCrustType(crustType: string): PizzaOrderBuilder {
        this.crustType = crustType;
        return this;
    }

    public setExtraCheese(extraCheese: boolean): PizzaOrderBuilder {
        this.extraCheese = extraCheese;
        return this;
    }

    public setPepperoni(pepperoni: boolean): PizzaOrderBuilder {
        this.pepperoni = pepperoni;
        return this;
    }

    public setMushrooms(mushrooms: boolean): PizzaOrderBuilder {
        this.mushrooms = mushrooms;
        return this;
    }

    // Getters for the PizzaOrder constructor
    public getPizzaType(): string {
        return this.pizzaType;
    }

    public getSize(): string {
        return this.size;
    }

    public getCrustType(): string {
        return this.crustType;
    }

    public getExtraCheese(): boolean {
        return this.extraCheese;
    }

    public getPepperoni(): boolean {
        return this.pepperoni;
    }

    public getMushrooms(): boolean {
        return this.mushrooms;
    }

    public build(): PizzaOrder {
        return new PizzaOrder(this);
    }
}

// Usage example
const builder = new PizzaOrderBuilder();
const order = builder.setPizzaType("margherita")
    .setSize("large")
    .setCrustType("thin")
    .setExtraCheese(true)
    .setPepperoni(false)
    .setMushrooms(true)
    .build();
console.log(order);

/**
 * The PizzaOrderBuilder class now encapsulates the construction process of the PizzaOrder class. 
 * Clients can utilize the builder to create PizzaOrder instances with a step-by-step approach, 
 * specifying only the desired parameters.
 */