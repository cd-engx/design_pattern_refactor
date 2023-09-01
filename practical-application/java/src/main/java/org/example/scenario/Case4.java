package org.example.scenario;

enum CustomerType {
    NEW,
    RETURNING
}

class Order {
    private int id;
    private CustomerType customerType;
    private double totalCost;

    public Order(int id, CustomerType customerType, double totalCost) {
        this.id = id;
        this.customerType = customerType;
        this.totalCost = totalCost;
    }

    public int getId() {
        return id;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public double getTotalCost() {
        return totalCost;
    }


}


class DiscountCalculator {

    public double calculateDiscount(Order order) {
        double totalDiscount = 0.0;

        if (order.getCustomerType() == CustomerType.NEW) {
            totalDiscount += order.getTotalCost() * 0.1;
        } else if (order.getCustomerType() == CustomerType.RETURNING) {
            totalDiscount += order.getTotalCost() * 0.2;
        }

        if (order.getTotalCost() >= 1000) {
            totalDiscount += order.getTotalCost() * 0.05;
        }

        return totalDiscount;
    }
}


