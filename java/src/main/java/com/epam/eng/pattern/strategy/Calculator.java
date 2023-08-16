package com.epam.eng.pattern.strategy;

public class Calculator {

    public static double calculate(double num1, double num2, String operation) {
        if(operation.equals("add")) {
            return num1 + num2;
        } else if(operation.equals("subtract")) {
            return num1 - num2;
        } else if(operation.equals("multiply")) {
            return num1 * num2;
        } else if(operation.equals("divide")) {
            return num1 / num2;
        } else {
            throw new IllegalArgumentException("Unknown operation: " + operation);
        }
    }

    public static void main(String[] args) {
        System.out.println("3 + 4 = " + calculate(3, 4, "add"));
        System.out.println("3 - 4 = " + calculate(3, 4, "subtract"));
        System.out.println("3 * 4 = " + calculate(3, 4, "multiply"));
        System.out.println("3 / 4 = " + calculate(3, 4, "divide"));
    }
}

// todo: consider to abstract algorithm
