interface Controller {
  moveUp(): void;
}

class Joystick implements Controller {
  public moveUp(): void {
    console.log("Joystick moved up");
  }
}

class GamePad implements Controller {
  public moveUp(): void {
    console.log("GamePad button 'Up' pressed");
  }
}

class GameConsole {
  private controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  public setController(newController: Controller): void {
    this.controller = newController;
  }

  public moveUp(): void {
    this.controller.moveUp();
  }
}

const joystick = new Joystick();
const gamepad = new GamePad();

const gameConsole = new GameConsole(joystick); // Start with joystick
gameConsole.moveUp(); // Outputs: Joystick moved up

gameConsole.setController(gamepad); // Switch to gamepad
gameConsole.moveUp(); // Outputs: GamePad button 'Up' pressed
