class Calculator {
    private result: number;

    constructor() {
        this.result = 0;
    }

    public add(num: number): void {
        this.result += num;
    }

    public sub(num: number): void {
        this.result -= num;
    }

    public undo(): void {
        throw new Error("Not Implemented Exception");
    }

    public printResult(): void {
        console.log(`Result: ${this.result}`);
    }
}

// todo: using the Memento Pattern implement undo() method so that it can restore result.