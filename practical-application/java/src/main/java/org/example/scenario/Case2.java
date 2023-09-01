package org.example.scenario;

// A class that represents a pizza
class Pizza {
    private String dough; // required
    private String sauce; // required
    private String cheese; // optional
    private String topping; // optional

    // Constructor with all parameters
    public Pizza(String dough, String sauce, String cheese, String topping) {
        this.dough = dough;
        this.sauce = sauce;
        this.cheese = cheese;
        this.topping = topping;
    }

    // Getters and setters
    public String getDough() {
        return dough;
    }

    public void setDough(String dough) {
        this.dough = dough;
    }

    public String getSauce() {
        return sauce;
    }

    public void setSauce(String sauce) {
        this.sauce = sauce;
    }

    public String getCheese() {
        return cheese;
    }

    public void setCheese(String cheese) {
        this.cheese = cheese;
    }

    public String getTopping() {
        return topping;
    }

    public void setTopping(String topping) {
        this.topping = topping;
    }
}

// A class that creates different types of pizzas
class PizzaMaker {

    // A method that creates a pizza with cheese and pepperoni
    public Pizza createCheesePepperoniPizza() {
        return new Pizza("Thin crust", "Tomato", "Mozzarella", "Pepperoni");
    }

    // A method that creates a pizza with cheese and mushroom
    public Pizza createCheeseMushroomPizza() {
        return new Pizza("Thick crust", "Creamy", "Cheddar", "Mushroom");
    }

    // A method that creates a pizza with cheese only
    public Pizza createCheesePizza() {
        return new Pizza("Regular crust", "Tomato", "Mozzarella", null);
    }
}
