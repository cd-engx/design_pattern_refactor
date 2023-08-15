package com.epam.eng.pattern.strategy;

public class Sorter {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for(int i = 0; i < n - 1; i++) {
            for(int j = 0; j < n - i - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for(int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for(int j = i+1; j < n; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void insertionSort(int[] arr) {
        for(int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while(j >= 0 && arr[j] > key) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };

        System.out.println("Original array:");
        for(int num : arr) {
            System.out.print(num + " ");
        }

        System.out.println("\nSorting using bubble sort:");
        Sorter.bubbleSort(arr);
        for(int num : arr) {
            System.out.print(num + " ");
        }

        System.out.println("\nSorting using selection sort:");
        Sorter.selectionSort(arr);
        for(int num : arr) {
            System.out.print(num + " ");
        }

        System.out.println("\nSorting using insertion sort:");
        Sorter.insertionSort(arr);
        for(int num : arr) {
            System.out.print(num + " ");
        }
    }
}
