abstract class PersonFactory {
  abstract createPerson(age: number, name: string, isMale: boolean): Person;
}

export class Person {
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

export class ConcretePersonFactory extends PersonFactory {
  createPerson(age: number, name: string, isMale: boolean): Person {
      return new Person(age, name, isMale);
  }
}

const personFactory = new ConcretePersonFactory();
const john = personFactory.createPerson(20, "Tracy", false);
john.eat("Pizza");
john.sleep();
john.work();
john.play("Chess");