class AmericanPlug {
  insertIntoAmericanSocket(): void {
    console.log("Inserting into American socket.");
  }
}

class EuropeanPlug {
  insertIntoEuropeanSocket(): void {
    console.log("Inserting into European socket.");
  }
}

class AmericanToEuropeanPlugAdapter extends EuropeanPlug {
  private americanPlug: AmericanPlug;
  constructor(americanPlug: AmericanPlug) {
    super();
    this.americanPlug = americanPlug;
  }

  insertIntoEuropeanSocket(): void {
    this.americanPlug.insertIntoAmericanSocket();
  }
}

const myAmericanPlug = new AmericanPlug();
const adapter = new AmericanToEuropeanPlugAdapter(myAmericanPlug);
adapter.insertIntoEuropeanSocket();
