class GameConsole {
    private joystick: Joystick = new Joystick();
    private gamepad: GamePad = new GamePad();
    private currentController: string;

    constructor() {
        this.currentController = "Joystick";
    }

    public setController(controller: string): void {
        if (controller === "Joystick") {
            this.currentController = "Joystick";
        } else if (controller === "Gamepad") {
            this.currentController = "Gamepad";
        } else {
            throw new Error("Invalid controller");
        }
    }

    public moveUp(): void {
        if (this.currentController === "Joystick") {
            this.joystick.moveUp();
        } else if (this.currentController === "Gamepad") {
            this.gamepad.pressButton("Up");
        }
    }
}

class Joystick {
    public moveUp(): void {
        // move joystick up
    }
}

class GamePad {
    public pressButton(button: string): void {
        // press gamepad button
    }
}

var gameConsole = new GameConsole();
gameConsole.moveUp();

// todo: consider abstract GameController, so that Joystick and Gamepad can extend them.
