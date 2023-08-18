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

class EuropeanAdapter implements EuropeanSocket {
  americanSocket: AmericanSocket;

  constructor() {
    this.americanSocket = new AmericanPlug();
  }

  insertIntoEuropeanSocket() {
    this.americanSocket.insertIntoAmericanSocket();
  }
}

const europeanAdapter = new EuropeanAdapter();
europeanAdapter.insertIntoEuropeanSocket();


/* TODO: Use the AmericanPlug in a European socket */

