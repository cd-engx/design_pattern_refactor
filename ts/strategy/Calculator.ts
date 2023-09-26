interface CalculationStrategy {
    execute(num1: number, num2: number): number;
}

class Add implements CalculationStrategy {
    execute(num1: number, num2: number): number {
        return num1 + num2;
    }
}

class Subtract implements CalculationStrategy {
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
}

class Multiply implements CalculationStrategy {
    execute(num1: number, num2: number): number {
        return num1 * num2;
    }
}

class Divide implements CalculationStrategy {
    execute(num1: number, num2: number): number {
        return num1 / num2;
    }
}

class Calculator {
    static calculate(num1: number, num2: number, strategy: CalculationStrategy): number {
        return strategy.execute(num1, num2);
    }
}

console.log("3 + 4 = " + Calculator.calculate(3, 4, new Add()));
console.log("3 - 4 = " + Calculator.calculate(3, 4, new Subtract()));
console.log("3 * 4 = " + Calculator.calculate(3, 4, new Multiply()));
console.log("3 / 4 = " + Calculator.calculate(3, 4, new Divide()));
