package com.epam.eng.pattern.memento;

class Calculator {
    private int result;

    public Calculator() {
        this.result = 0;
    }

    public void add(int num) {
        this.result += num;
    }

    public void sub(int num) {
        this.result -= num;
    }

    public void undo() {
        throw new RuntimeException("Not Implemented Exception");
    }

    public void printResult() {
        System.out.println("Result: " + this.result);
    }
}
// todo: using the Memento Pattern implement undo() method so that it can restore result.