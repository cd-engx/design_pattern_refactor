package com.epam.eng.pattern.factory.units;

public abstract class FlyingUnits extends Unit {
    protected int bombCount;

    public FlyingUnits() {
        super();
        bombCount = 10;
    }

    private void bombDown() {
        bombCount--;
        System.out.printf("Bomb down to %d!%n", bombCount);
    }

    @Override
    public void levelUp() {
        super.levelUp();
        attack++;
        agility++;
    }

    @Override
    public void attack() {
        bombDown();
    }
}
