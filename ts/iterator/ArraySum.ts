

class ArraySum {
    private array: number[];

    constructor(array: number[]) {
        this.array = array;
    }

    public getSum(): number {
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }

        return sum;
    }
}



const array = [1, 2, 3, 4, 5];

const arraySum = new ArraySum(array);
const sum = arraySum.getSum();

console.log("Sum: " + sum);


// todo: change for loop to while loop using Iterator Pattern
