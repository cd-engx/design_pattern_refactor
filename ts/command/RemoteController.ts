/**
 * To refactor this code using the Command pattern, 
 * you can create an interface that represents commands and implement concrete commands for turning the light bulb on and off. 
 * The RemoteController class will then take in commands as its parameters.
 */

// Define the command interface
interface Command {
    execute(): void;
}

// Define the LightBulb interface
interface ILightBulb {
    turnOn(): void;
    turnOff(): void;
}

// Implement the LightBulb interface with the existing LightBulb class
class LightBulb implements ILightBulb {
    public turnOn(): void {
        console.log("LightBulb: Bulb turned on...");
    }

    public turnOff(): void {
        console.log("LightBulb: Bulb turned off...");
    }
}

// Create concrete command classes for turning the light bulb on and off
class TurnOnLightCommand implements Command {
    private lightBulb: LightBulb;

    constructor(lightBulb: LightBulb) {
        this.lightBulb = lightBulb;
    }

    public execute(): void {
        this.lightBulb.turnOn();
    }
}

class TurnOffLightCommand implements Command {
    private lightBulb: LightBulb;

    constructor(lightBulb: LightBulb) {
        this.lightBulb = lightBulb;
    }

    public execute(): void {
        this.lightBulb.turnOff();
    }
}

// Update the RemoteController class to work with Command objects
class RemoteController {
    private buttonPressCommand: Command;

    constructor(command: Command) {
        this.buttonPressCommand = command;
    }

    public setCommand(command: Command): void {
        this.buttonPressCommand = command;
    }

    public pressButton(): void {
        this.buttonPressCommand.execute();
    }
}

// Usage example
const lightBulb = new LightBulb();

const turnOnLightCommand = new TurnOnLightCommand(lightBulb);
const turnOffLightCommand = new TurnOffLightCommand(lightBulb);

const remoteController = new RemoteController(turnOnLightCommand);

remoteController.pressButton(); // LightBulb: Bulb turned on...

remoteController.setCommand(turnOffLightCommand);
remoteController.pressButton(); // LightBulb: Bulb turned off...

/**
 * Now, the RemoteController class works with commands instead of directly operating on the LightBulb class.
 * This decouples the RemoteController from the LightBulb logic, making it more flexible and extensible.
 * Adding new functionality simply requires implementing new Command classes.
 */