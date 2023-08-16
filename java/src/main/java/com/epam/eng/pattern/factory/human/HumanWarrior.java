package com.epam.eng.pattern.factory.human;

import com.epam.eng.pattern.factory.units.Warrior;

public class HumanWarrior extends Warrior {
    public HumanWarrior(String weapon) {
        super(weapon);
        agility = 8;
        attack = 10;
        defense = 10;
    }

    @Override
    public void attack() {
        System.out.printf("HumanWarrior attack with %s!%n", weapon);
        super.attack();
    }
}
