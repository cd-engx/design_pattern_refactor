package com.epam.eng.pattern.chainofresponsibility;

public class PurchaseApproval {

    public static void main(String[] args) {
        PurchaseRequest request = new PurchaseRequest(8000);
        Manager manager = new Manager();
        manager.approve(request);
    }
}

class PurchaseRequest {

    private double amount;

    public PurchaseRequest(double amount) {
        this.amount = amount;
    }

    public double getAmount() {
        return amount;
    }
}

class Manager {

    public void approve(PurchaseRequest request) {
        if (request.getAmount() <= 1000) {
            System.out.println("Manager approved the purchase request!");
        } else {
            System.out.println("Manager cannot approve the purchase request. Forwarding to Director...");
            new Director().approve(request);
        }
    }
}

class Director {

    public void approve(PurchaseRequest request) {
        if (request.getAmount() <= 5000) {
            System.out.println("Director approved the purchase request!");
        } else {
            System.out.println("Director cannot approve the purchase request. Forwarding to Vice President...");
            new VicePresident().approve(request);
        }
    }
}

class VicePresident {

    public void approve(PurchaseRequest request) {
        if (request.getAmount() <= 10000) {
            System.out.println("Vice President approved the purchase request!");
        } else {
            System.out.println("Vice President cannot approve the purchase request. Request denied.");
        }
    }
}


// todo: consider to build a chain of objects. in this situation, Manager's supervisor is Director, Director's supervisor is VicePresident
