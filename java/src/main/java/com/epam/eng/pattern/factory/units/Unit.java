package com.epam.eng.pattern.factory.units;

public abstract class Unit {
    protected int id;
    protected int level;
    protected int hp;
    protected int agility;
    protected int defense;
    protected int attack;

    public Unit() {
        id = (int) (Math.random() * 1000000 + Math.random() * 1000);
        level = 1;
        hp = 1;
    }

    public void levelUp() {
        System.out.println("Level up!");
        level++;
    }

    public String toString () {
        return String.format("Unit id: %d, level: %d, hp: %d, agility: %d, defense: %d, attack: %d",
                id, level, hp, agility, defense, attack);
    }

    public abstract void attack();
}
