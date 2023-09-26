interface SortStrategy {
  sort(arr: number[]): void;
}

class BubbleSort implements SortStrategy {
  sort(arr: number[]): void {
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
}

class SelectionSort implements SortStrategy {
  sort(arr: number[]): void {
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
}

class InsertionSort implements SortStrategy {
  sort(arr: number[]): void {
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
}

class Sorter {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  public sort(arr: number[]): void {
    this.strategy.sort(arr);
  }
}

const arr: number[] = [64, 34, 25, 12, 22, 11, 90];

const bubbleSorter = new Sorter(new BubbleSort());
bubbleSorter.sort(arr);

const selectionSorter = new Sorter(new SelectionSort());
selectionSorter.sort(arr);

const insertionSorter = new Sorter(new InsertionSort());
insertionSorter.sort(arr);
