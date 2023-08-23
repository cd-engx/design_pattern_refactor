/**
 * In the existing code, 
 * the Home class already acts as a facade to simplify interaction with subsystem classes like Light, Fan, and AirCon.
 * However, we can still improve the code by extracting the facade functionality into a separate SmartHomeFacade class.
 */

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
  public livingRoomLight: Light = new Light();
  public kitchenLight: Light = new Light();
  public livingRoomFan: Fan = new Fan();
  public bedroomFan: Fan = new Fan();
  public bedroomAC: AirCon = new AirCon();
}

class SmartHomeFacade {
  private home: Home;

  constructor(home: Home) {
      this.home = home;
  }

  turnOnLights() {
      this.home.livingRoomLight.on();
      this.home.kitchenLight.on();
  }

  turnOffLights() {
      this.home.livingRoomLight.off();
      this.home.kitchenLight.off();
  }

  turnOnFan() {
      this.home.livingRoomFan.on();
      this.home.bedroomFan.on();
  }

  turnOffFan() {
      this.home.livingRoomFan.off();
      this.home.bedroomFan.off();
  }

  turnOnAc() {
      this.home.bedroomAC.on();
  }

  turnOffAc() {
      this.home.bedroomAC.off();
  }
}

const smartHome = () => {
  const home = new Home();
  const facade = new SmartHomeFacade(home);

  facade.turnOnLights();
  facade.turnOnFan();
  facade.turnOnAc();

  facade.turnOffLights();
  facade.turnOffFan();
  facade.turnOffAc();
};

smartHome();

/**
 * Now, the SmartHomeFacade class encapsulates the interaction logic with the Home subsystems,
 * making it easier to maintain and expand the facade functionality. Client code (i.e., the smartHome function) now deals only with the high-level SmartHomeFacade interface, 
 * which makes it more readable and easy to understand.
 */