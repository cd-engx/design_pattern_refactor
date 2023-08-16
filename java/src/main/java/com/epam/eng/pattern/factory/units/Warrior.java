package com.epam.eng.pattern.factory.units;

public abstract class Warrior extends Unit {
    protected int rage;
    protected String weapon;

    public Warrior(String weapon) {
        super();
        rage = 0;
        hp = 100;
        this.weapon = weapon;
    }

    private void rageUp() {
        if (rage < 100) {
            rage++;
        }
        System.out.printf("Rage up to %d!%n", rage);
    }

    @Override
    public void levelUp() {
        super.levelUp();
        attack++;
        defense++;
    }

    @Override
    public void attack() {
        rageUp();
    }
}
