package com.epam.eng.pattern.command;

class LightBulb {
    public void turnOn() {
        System.out.println("LightBulb: Bulb turned on...");
    }

    public void turnOff() {
        System.out.println("LightBulb: Bulb turned off...");
    }
}

public class RemoteController {

}

// todo: consider to build a RemoteController to execute TurnOnLightCommand or TurnOffLightCommand to control the LightBulb.
