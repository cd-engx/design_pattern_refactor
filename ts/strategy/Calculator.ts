export interface ICalculateStrategy {
    calculate(num1: number, num2: number): number;
}

export class Add implements ICalculateStrategy {
    calculate(num1: number, num2: number) {
        return num1 + num2;
    }
}

export class Subtract implements ICalculateStrategy {
    calculate(num1: number, num2: number) {
        return num1 - num2;
    }
}

export class Multiply implements ICalculateStrategy {
    calculate(num1: number, num2: number) {
        return num1 * num2;
    }
}

export class Divide implements ICalculateStrategy {
    calculate(num1: number, num2: number) {
        return num1 / num2;
    }
}

export interface IStrategyConstructor {
    new (): ICalculateStrategy
}

export class CalculateStrategy {
    request(calculateStrategy: IStrategyConstructor) {
        return new calculateStrategy()
    }
}

const CALCULATE = new CalculateStrategy();

const add = CALCULATE.request(Add);
const substract = CALCULATE.request(Subtract);
const multiply = CALCULATE.request(Multiply);
const divide = CALCULATE.request(Divide);

console.log("3 + 4 = " + add.calculate(3, 4));
console.log("3 - 4 = " + substract.calculate(3, 4));
console.log("3 * 4 = " + multiply.calculate(3, 4));
console.log("3 / 4 = " + divide.calculate(3, 4));
