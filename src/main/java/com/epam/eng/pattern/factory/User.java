package com.epam.eng.pattern.factory;

public class User {
    private String name;
    private String email;
    private String role;

    public User(String name, String email, String role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public void notifyUser(String message) {
        if (role.equals("admin")) {
            System.out.println("Sending message to admin: " + message);
        } else if (role.equals("user")) {
            System.out.println("Sending message to user: " + message);
        } else {
            System.out.println("Invalid role type");
        }
    }

    public static void main(String[] args) {
        User user = new User("John Doe", "john.doe@example.com", "admin");
        user.notifyUser("This is a notification message");
    }
}