class Sorter {
    public static bubbleSort(arr: number[]): void {
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
    }

    public static selectionSort(arr: number[]): void {
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
    }

    public static insertionSort(arr: number[]): void {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static main(): void {
        let arr: number[] = [64, 34, 25, 12, 22, 11, 90];

        console.log("Original array:");
        for (let num of arr) {
            console.log(num + " ");
        }

        console.log("\nSorting using bubble sort:");
        Sorter.bubbleSort(arr);
        for (let num of arr) {
            console.log(num + " ");
        }

        console.log("\nSorting using selection sort:");
        Sorter.selectionSort(arr);
        for (let num of arr) {
            console.log(num + " ");
        }

        console.log("\nSorting using insertion sort:");
        Sorter.insertionSort(arr);
        for (let num of arr) {
            console.log(num + " ");
        }
    }
}

Sorter.main();


// todo: consider to abstract sort algorithm

