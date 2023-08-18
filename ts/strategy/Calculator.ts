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
    calculate(num1: number, num2: number, calculateStrategy: IStrategyConstructor) {
        new calculateStrategy().calculate(num1, num2);
    }
}

const calculateStrategy = new CalculateStrategy();

console.log("3 + 4 = " + calculateStrategy.calculate(3,4, Add));
console.log("3 - 4 = " + calculateStrategy.calculate(3, 4, Subtract));
console.log("3 * 4 = " + calculateStrategy.calculate(3, 4, Multiply));
console.log("3 / 4 = " + calculateStrategy.calculate(3, 4, Divide));
