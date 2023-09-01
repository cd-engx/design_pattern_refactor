package org.example.scenario;

class CoffeeMachine {
    private int waterLevel;
    private int coffeeBeansLevel;

    public CoffeeMachine(int water, int coffeeBeans) {
        waterLevel = water;
        coffeeBeansLevel = coffeeBeans;
    }

    public void makeEspresso() {
        if (waterLevel >= 30 && coffeeBeansLevel >= 15) {
            System.out.println("Espresso is ready!");
            waterLevel -= 30;
            coffeeBeansLevel -= 15;
        } else {
            System.out.println("Sorry, not enough water or coffee beans!");
        }
    }

    public void makeLatte() {
        if (waterLevel >= 60 && coffeeBeansLevel >= 30) {
            System.out.println("Latte is ready!");
            waterLevel -= 60;
            coffeeBeansLevel -= 30;
        } else {
            System.out.println("Sorry, not enough water or coffee beans!");
        }
    }
}