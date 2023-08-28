
class RemoteController {

}

class LightBulb {
    public turnOn(): void {
        console.log("LightBulb: Bulb turned on...");
    }

    public turnOff(): void {
        console.log("LightBulb: Bulb turned off...");
    }
}

// todo: consider to build a RemoteController to execute TurnOnLightCommand or TurnOffLightCommand to control the LightBulb.

