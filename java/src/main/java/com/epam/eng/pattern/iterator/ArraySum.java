package com.epam.eng.pattern.iterator;

public class ArraySum {
    private int[] array;

    public ArraySum(int[] array) {
        this.array = array;
    }

    public int getSum() {
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};

        ArraySum arraySum = new ArraySum(array);
        int sum = arraySum.getSum();

        System.out.println("Sum: " + sum);
    }
}

// todo: change for loop to while loop using Iterator Pattern
