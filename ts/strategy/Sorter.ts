interface SortMethod {
    sort(arr: number[]): number[]
}

class BubbleSort implements SortMethod {
    sort(arr: number[]) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}

class SelectionSort implements SortMethod {
    sort(arr: number[]) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            const temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
}

class InsertionSort implements SortMethod {
    sort(arr: number[]) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    }
}

class Sorter{
    sortMethod: SortMethod;
    arr: number [];
    constructor(sortMethod: SortMethod, arr: number[]) {
        this.sortMethod = sortMethod;
        this.arr = arr;
    }

    displayArr () {
        for (let num of  this.sortMethod.sort(this.arr)) {
            console.log(num + " ");
        }
    }
}

let arr: number[] = [64, 34, 25, 12, 22, 11, 90];

const bubbleSort = new BubbleSort();
const selectionSort = new SelectionSort();
const insertionSort = new InsertionSort();

const sorter1 = new Sorter(bubbleSort, arr);
sorter1.displayArr()
console.log("============================================================")

const sorter2 = new Sorter(bubbleSort, arr);
sorter2.displayArr()
console.log("============================================================")

const sorter3 = new Sorter(bubbleSort, arr);
sorter3.displayArr()