class PizzaOrder {
    private pizzaType: string = "";
    private size: string = "";
    private crustType: string = "";
    private extraCheese: boolean = false;
    private pepperoni: boolean = false;
    private mushrooms: boolean = false;

    public setPizzaType(pizzaType: string) {
        this.pizzaType = pizzaType;
    }

    public setSize(size: string) {
        this.size = size;
    }

    public setCrustType(crustType: string) {
        this.crustType = crustType;
    }

    public setExtraCheese(extraCheese: boolean) {
        this.extraCheese = extraCheese;
    }

    public setPepperoni(pepperoni: boolean) {
        this.pepperoni = pepperoni;
    }

    public setMushrooms(mushrooms: boolean) {
        this.mushrooms = mushrooms;
    }
}

var order = new PizzaOrder();
console.log(order);

// todo: consider create a PizzaOrderBuilder so that can build PizzaOrder step by step.
