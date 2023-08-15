package com.epam.eng.pattern.adapter;

public class Plug {

    class AmericanPlug {
        public void insertIntoAmericanSocket() {
            System.out.println("Inserting into American socket.");
        }
    }

    class EuropeanPlug {
        public void insertIntoEuropeanSocket() {
            System.out.println("Inserting into European socket.");
        }
    }


    public static void main(String[] args) {
        /* TODO: Use the AmericanPlug in a European socket */
    }
}
