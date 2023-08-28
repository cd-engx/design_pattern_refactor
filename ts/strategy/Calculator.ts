class Calculator {
    static calculate(num1: number, num2: number, operation: string): number {
        if (operation === "add") {
            return num1 + num2;
        } else if (operation === "subtract") {
            return num1 - num2;
        } else if (operation === "multiply") {
            return num1 * num2;
        } else if (operation === "divide") {
            return num1 / num2;
        } else {
            throw new Error("Unknown operation: " + operation);
        }
    }

}

console.log("3 + 4 = " + Calculator.calculate(3, 4, "add"));
console.log("3 - 4 = " + Calculator.calculate(3, 4, "subtract"));
console.log("3 * 4 = " + Calculator.calculate(3, 4, "multiply"));
console.log("3 / 4 = " + Calculator.calculate(3, 4, "divide"));

// todo: consider to abstract algorithm

