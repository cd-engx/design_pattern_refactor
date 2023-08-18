import { ConcretePersonFactory } from './Person';

describe('Person class', () => {
  const personFactory = new ConcretePersonFactory();
  const person = personFactory.createPerson(20, 'Tracy', false);

  test('should create a Person object with correct age', () => {
    expect(person.getAge()).toBe(20);
  });

  test('should create a Person object with correct name', () => {
    expect(person.getName()).toBe('Tracy');
  });

  test('should create a Person object with correct isMale value', () => {
    expect(person.getIsMale()).toBe(false);
  });

  test('should log message correctly for eating action', () => {
    console.log = jest.fn();
    person.eat('rice');
    expect(console.log).toHaveBeenCalledWith('Tracy is eating rice');
  });

  test('should log message correctly for sleeping action', () => {
    console.log = jest.fn();
    person.sleep();
    expect(console.log).toHaveBeenCalledWith('Tracy is sleeping');
  });

  test('should log message correctly for working action', () => {
    console.log = jest.fn();
    person.work();
    expect(console.log).toHaveBeenCalledWith('Tracy is working');
  });

  test('should log message correctly for playing action', () => {
    console.log = jest.fn();
    person.play('LOL');
    expect(console.log).toHaveBeenCalledWith('Tracy is playing LOL');
  });
});