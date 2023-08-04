package com.epam.eng.pattern.factory;

public class Person {
    private int age;
    private String name;
    private boolean isMale;

    public Person(int age, String name, boolean isMale) {
        this.age = age;
        this.name = name;
        this.isMale = isMale;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public boolean isMale() {
        return isMale;
    }

    public void eat(String food) {
        System.out.println(name + " is eating " + food);
    }

    public void sleep() {
        System.out.println(name + " is sleeping");
    }

    public void work() {
        System.out.println(name + " is working");
    }

    public void play(String game) {
        System.out.println(name + " is playing " + game);
    }

    public static void main(String args[]) {
        Person person = new Person(25, "John", true);
        person.eat("Pizza");
        person.sleep();
        person.work();
        person.play("Chess");
    }
}