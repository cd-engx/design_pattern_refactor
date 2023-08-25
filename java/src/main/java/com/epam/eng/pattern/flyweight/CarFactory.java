package com.epam.eng.pattern.flyweight;

import java.util.Objects;

class Car {
    private String make;
    private String model;
    private int year;
    private String color;

    public Car(String make, String model, int year, String color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return year == car.year && Objects.equals(make, car.make) && Objects.equals(model, car.model) && Objects.equals(color, car.color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(make, model, year, color);
    }
}

public class CarFactory {
    public static Car getCar(String make, String model, int year, String color) {
        return new Car(make, model, year, color);
    }
}


// todo: use Flyweight Pattern, in CarFactory, Car objects will only be created if they do not already exist in the cache.
