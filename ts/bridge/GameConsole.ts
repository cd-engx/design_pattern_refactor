/**
 * To refactor this code using the Bridge pattern, 
 * we can create an abstraction for the controller and separate the implementation of different controllers.
 **/

// Define the abstraction for the controller
interface Controller {
    moveUp(): void;
}

// Implement the Joystick controller
class Joystick implements Controller {
    public moveUp(): void {
        // Move joystick up
    }
}

// Implement the Gamepad controller
class GamePad implements Controller {
    public moveUp(): void {
        // Press gamepad "Up" button
    }
}

// Update the GameConsole class to work with the abstraction
class GameConsole {
    private currentController: Controller;

    constructor(controller: Controller) {
        this.currentController = controller;
    }

    public setController(controller: Controller): void {
        this.currentController = controller;
    }

    public moveUp(): void {
        this.currentController.moveUp();
    }
}

// Usage
const joystick = new Joystick();
const gamePad = new GamePad();

const gameConsole = new GameConsole(joystick);
gameConsole.moveUp(); // Use joystick to move up

gameConsole.setController(gamePad);
gameConsole.moveUp(); // Use gamepad to move up

/**
 * Now, the GameConsole class is decoupled from the specific implementations of controllers. 
 * You can create new controllers implementing the Controller interface without needing to modify the GameConsole class. 
 * Also, adding new controller types will not require changes to the GameConsole class.
 */