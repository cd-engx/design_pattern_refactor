package com.epam.eng.pattern.command;

public class RemoteController {

}

class LightBulb {
    public void turnOn() {
        System.out.println("LightBulb: Bulb turned on...");
    }

    public void turnOff() {
        System.out.println("LightBulb: Bulb turned off...");
    }
}

// todo: consider to build a RemoteController to execute TurnOnLightCommand or TurnOffLightCommand to controller the LightBulb.
