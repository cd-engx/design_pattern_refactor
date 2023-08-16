package com.epam.eng.pattern.factory.orc;

import com.epam.eng.pattern.factory.units.Warrior;

public class OrcWarrior extends Warrior {
    public OrcWarrior(String weapon) {
        super(weapon);
        agility = 5;
        attack = 12;
        defense = 10;
    }

    @Override
    public void attack() {
        System.out.printf("OrcWarrior attack with %s!%n", weapon);
        super.attack();
    }
}
