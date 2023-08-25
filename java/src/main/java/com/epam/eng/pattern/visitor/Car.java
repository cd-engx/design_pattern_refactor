package com.epam.eng.pattern.visitor;

public class Car {
    private String model;
    private String color;
    private int year;
    private int price;

    public Car(String model, String color, int year, int price) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
    }

    public void assemble() {
        System.out.println("Assembling " + model + "...");
    }

    public void applyColor() {
        System.out.println("Applying " + color + " color to " + model + "...");
    }

    public void applyWarranty() {
        System.out.println("Applying warranty to " + model + "...");
    }

    public void calculatePrice() {
        System.out.println("Calculating price for " + model + "...");
    }

    public String getModel() {
        return model;
    }

    public String getColor() {
        return color;
    }

    public int getYear() {
        return year;
    }

    public int getPrice() {
        return price;
    }
}

/**
 * todo:
 * This program represents a Car class with several methods for assembling, applying color, applying warranty, and calculating the price of the car. These methods are currently mixed in with the Car class, leading to a potential code smell.
 * To refactor this program using the Visitor Pattern, we can create an visitor interface and car object accept Visitor.
 */
