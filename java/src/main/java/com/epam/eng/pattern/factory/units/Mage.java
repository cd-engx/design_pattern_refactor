package com.epam.eng.pattern.factory.units;

public abstract class Mage extends Unit{
    protected String skill;
    protected int mana;

    public Mage(String skill, int mana) {
        super();
        this.mana = mana;
        this.skill = skill;
    }

    private void manaDown(int mana) {
        this.mana = this.mana - mana;
        System.out.printf("Mana down to %d!%n", this.mana);
    }

    @Override
    public void levelUp() {
        super.levelUp();
        attack++;
        defense++;
    }

    @Override
    public void attack() {
        manaDown(10);
    }
}
