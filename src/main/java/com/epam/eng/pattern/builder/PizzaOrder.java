package com.epam.eng.pattern.builder;

public class PizzaOrder {
    private String pizzaType;
    private String size;
    private String crustType;
    private boolean extraCheese;
    private boolean pepperoni;
    private boolean mushrooms;

    public void setPizzaType(String pizzaType) {
        this.pizzaType = pizzaType;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public void setCrustType(String crustType) {
        this.crustType = crustType;
    }

    public void setExtraCheese(boolean extraCheese) {
        this.extraCheese = extraCheese;
    }

    public void setPepperoni(boolean pepperoni) {
        this.pepperoni = pepperoni;
    }

    public void setMushrooms(boolean mushrooms) {
        this.mushrooms = mushrooms;
    }
}
