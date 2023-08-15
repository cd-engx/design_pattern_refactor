package com.epam.eng.pattern.facade;

class Light {
    void on() {
        System.out.println("Light is on");
    }

    void off() {
        System.out.println("Light is off");
    }
}

class Fan {
    void on() {
        System.out.println("Fan is on");
    }

    void off() {
        System.out.println("Fan is off");
    }
}

class AirCon {
    void on() {
        System.out.println("Air conditioner is on");
    }

    void off() {
        System.out.println("Air conditioner is off");
    }
}

class Home {
    private Light livingRoomLight;
    private Light kitchenLight;
    private Fan livingRoomFan;
    private Fan bedroomFan;
    private AirCon bedroomAC;

    public Home() {
        livingRoomLight = new Light();
        kitchenLight = new Light();
        livingRoomFan = new Fan();
        bedroomFan = new Fan();
        bedroomAC = new AirCon();
    }

    public void turnOnLights() {
        livingRoomLight.on();
        kitchenLight.on();
    }

    public void turnOffLights() {
        livingRoomLight.off();
        kitchenLight.off();
    }

    public void turnOnFan() {
        livingRoomFan.on();
        bedroomFan.on();
    }

    public void turnOffFan() {
        livingRoomFan.off();
        bedroomFan.off();
    }

    public void turnOnAc() {
        bedroomAC.on();
    }

    public void turnOffAc() {
        bedroomAC.off();
    }
}

public class SmartHome {
    public static void main(String[] args) {
        Home home = new Home();
        home.turnOnLights();
        home.turnOnFan();
        home.turnOnAc();

        home.turnOffLights();
        home.turnOffFan();
        home.turnOffAc();
    }
}

// todo: consider to turn On all devices by a single method. consider to turn Off all devices by a single method.
