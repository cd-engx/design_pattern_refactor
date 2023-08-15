package com.epam.eng.pattern.decorator;

public class Coffee {
    private String size;
    private boolean milk;
    private boolean sugar;
    private double cost;

    public Coffee(String size, boolean milk, boolean sugar, double cost) {
        this.size = size;
        this.milk = milk;
        this.sugar = sugar;
        this.cost = cost;
    }

    public String getDescription() {
        String description = size;
        if (milk) {
            description += " with milk";
        }
        if (sugar) {
            description += " with sugar";
        }
        return description;
    }

    public double getCost() {
        return cost;
    }

}

