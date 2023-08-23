class Person {
  private age: number;
  private name: string;
  private isMale: boolean;

  constructor(age: number, name: string, isMale: boolean) {
    this.age = age;
    this.name = name;
    this.isMale = isMale;
  }

  getAge(): number {
    return this.age;
  }

  getName(): string {
    return this.name;
  }

  getIsMale(): boolean {
    return this.isMale;
  }

  eat(food: string): void {
    console.log(`${this.name} is eating ${food}`);
  }

  sleep(): void {
    console.log(`${this.name} is sleeping`);
  }

  work(): void {
    console.log(`${this.name} is working`);
  }

  play(game: string): void {
    console.log(`${this.name} is playing ${game}`);
  }
}

class PersonFactory {
  static createJohn(): Person {
    return new Person(25, "John", true);
  }
}

const john = PersonFactory.createJohn();
john.eat("Pizza");
john.sleep();
john.work();
john.play("Chess");
