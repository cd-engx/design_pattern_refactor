package com.epam.eng.pattern.interpreter;

public class PhoneNumberMasker {
    public static void main(String[] args) {
        String phoneNumber = "123-456-7890";
        String maskedPhoneNumber = maskPhoneNumber(phoneNumber);
        System.out.println(maskedPhoneNumber);
    }

    public static String maskPhoneNumber(String phoneNumber) {
        String[] parts = phoneNumber.split("-");
        String firstPart = parts[0];
        String secondPart = parts[1];
        String thirdPart = parts[2];
        String maskedSecondPart = "XXX";
        return firstPart + "-" + maskedSecondPart + "-" + thirdPart;
    }
}