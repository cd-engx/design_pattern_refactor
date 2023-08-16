package com.epam.eng.pattern.strategy;

import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {
    private List<Item> items;

    public ShoppingCart() {
        items = new ArrayList<>();
    }

    public void addItem(Item item) {
        items.add(item);
    }

    public void removeItem(Item item) {
        items.remove(item);
    }

    public double calculateTotal() {
        double total = 0.0;
        for (Item item : items) {
            total += item.getPrice();
        }
        return total;
    }

    public void pay(String paymentMethod) {
        double total = calculateTotal();
        if (paymentMethod.equals("credit_card")) {
            System.out.println("Payment made with credit card: $" + total);
        } else if (paymentMethod.equals("paypal")) {
            System.out.println("Payment made with PayPal: $" + total);
        } else {
            throw new IllegalArgumentException("Unknown payment method: " + paymentMethod);
        }
    }

    class Item {
        private String name;
        private double price;

        public Item(String name, double price) {
            this.name = name;
            this.price = price;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public double getPrice() {
            return price;
        }

        public void setPrice(double price) {
            this.price = price;
        }
    }

}

// todo: consider to abstract payment
