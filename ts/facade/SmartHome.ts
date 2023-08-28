class Light {
    on() {
      console.log("Light is on");
    }
  
    off() {
      console.log("Light is off");
    }
  }
  
  class Fan {
    on() {
      console.log("Fan is on");
    }
  
    off() {
      console.log("Fan is off");
    }
  }
  
  class AirCon {
    on() {
      console.log("Air conditioner is on");
    }
  
    off() {
      console.log("Air conditioner is off");
    }
  }
  
  class Home {
    private livingRoomLight: Light;
    private kitchenLight: Light;
    private livingRoomFan: Fan;
    private bedroomFan: Fan;
    private bedroomAC: AirCon;
  
    constructor() {
      this.livingRoomLight = new Light();
      this.kitchenLight = new Light();
      this.livingRoomFan = new Fan();
      this.bedroomFan = new Fan();
      this.bedroomAC = new AirCon();
    }
  
    turnOnLights() {
      this.livingRoomLight.on();
      this.kitchenLight.on();
    }
  
    turnOffLights() {
      this.livingRoomLight.off();
      this.kitchenLight.off();
    }
  
    turnOnFan() {
      this.livingRoomFan.on();
      this.bedroomFan.on();
    }
  
    turnOffFan() {
      this.livingRoomFan.off();
      this.bedroomFan.off();
    }
  
    turnOnAc() {
      this.bedroomAC.on();
    }
  
    turnOffAc() {
      this.bedroomAC.off();
    }
  }
  
  const smartHome = () => {
    const home = new Home();
    home.turnOnLights();
    home.turnOnFan();
    home.turnOnAc();
  
    home.turnOffLights();
    home.turnOffFan();
    home.turnOffAc();
  };
  
  smartHome();

  // todo: consider to turn On all devices by a single method. consider to turn Off all devices by a single method.
