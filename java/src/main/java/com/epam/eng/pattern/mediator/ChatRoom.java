package com.epam.eng.pattern.mediator;


import java.util.ArrayList;
import java.util.List;

public class ChatRoom {
    private List<User> users;

    public ChatRoom() {
        users = new ArrayList<>();
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void sendMessage(String message, User sender) {
        for (User user : users) {
            if (!user.equals(sender)) {
                user.receiveMessage(message);
            }
        }
    }
}

class User {
    private String name;

    public User(String name) {
        this.name = name;
    }

    public void sendMessage(String message, ChatRoom chatRoom) {
        chatRoom.sendMessage(message, this);
    }

    public void receiveMessage(String message) {
        System.out.println(name + " received message: " + message);
    }
}

class Main {
    public static void main(String[] args) {
        ChatRoom chatRoom = new ChatRoom();

        User user1 = new User("Bob");
        chatRoom.addUser(user1);

        User user2 = new User("Alice");
        chatRoom.addUser(user2);

        user1.sendMessage("Hello, Alice!", chatRoom);
        user2.sendMessage("Hi, Bob!", chatRoom);
    }
}

// todo: ChatRoom is Mediator
//  The User class takes a Mediator object as a parameter in its constructor and registers itself with the mediator when it's created.