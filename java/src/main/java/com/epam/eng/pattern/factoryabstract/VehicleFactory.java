package com.epam.eng.pattern.factoryabstract;

class Sedan {
    String brand;

    public Sedan(String brand) {
        this.brand = brand;
    }

    void start() {
        System.out.println(brand + " Sedan started");
    }

    void stop() {
        System.out.println(brand + " Sedan stopped");
    }
}

class Suv {
    String brand;

    public Suv(String brand) {
        this.brand = brand;
    }

    void start() {
        System.out.println(brand + " SUV started");
    }

    void stop() {
        System.out.println(brand + " SUV stopped");
    }
}

public class VehicleFactory {

    public static void main(String[] args) {
        Sedan toyotaSedan = new Sedan("Toyota");
        Suv toyotaSuv = new Suv("Toyota");
        Sedan fordSedan = new Sedan("Ford");
        Suv fordSuv = new Suv("Ford");

        toyotaSedan.start();
        toyotaSedan.stop();
        toyotaSuv.start();
        toyotaSuv.stop();
        fordSedan.start();
        fordSedan.stop();
        fordSuv.start();
        fordSuv.stop();
    }
}

// todo: Toyota Factory produce Toyota vehicle(Sedan / SUV), Ford Factory produce Ford vehicle(Sedan / SUV). use abstract factory pattern to abstract them.
