interface AmericanSocket {
  insertIntoAmericanSocket(): void;
}
class AmericanPlug implements AmericanSocket{
  insertIntoAmericanSocket(): void {
    console.log("Inserting into American socket.");
  }
}

interface EuropeanSocket {
  insertIntoEuropeanSocket(): void;
}

class EuropeanPlug implements EuropeanSocket{
  insertIntoEuropeanSocket(): void {
    console.log("Inserting into European socket.");
  }
}

class EuropeanAdapter implements AmericanSocket {
  europeanSocket: EuropeanSocket;

  constructor() {
    this.europeanSocket = new EuropeanPlug();
  }

  insertIntoAmericanSocket() {
    this.europeanSocket.insertIntoEuropeanSocket();
  }
}

const europeanAdapter = new EuropeanAdapter();
europeanAdapter.insertIntoAmericanSocket();


/* TODO: Use the AmericanPlug in a European socket */

