package com.epam.eng.pattern.bridge;

public class GameConsole {
    private Joystick joystick = new Joystick();
    private Gamepad gamepad = new Gamepad();
    private String currentController;

    public GameConsole() {
        currentController = "Joystick";
    }

    public void setController(String controller) {
        if (controller.equals("Joystick")) {
            currentController = "Joystick";
        } else if (controller.equals("Gamepad")) {
            currentController = "Gamepad";
        } else {
            throw new IllegalArgumentException("Invalid controller");
        }
    }

    public void moveUp() {
        if (currentController.equals("Joystick")) {
            joystick.moveUp();
        } else if (currentController.equals("Gamepad")) {
            gamepad.pressButton("Up");
        }
    }
}

class Joystick {
    public void moveUp() {
        // move joystick up
    }
}

class Gamepad {
    public void pressButton(String button) {
        // press gamepad button
    }
}