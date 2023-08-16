package com.epam.eng.pattern.factory.orc;

import com.epam.eng.pattern.factory.units.Mage;

public class TrollMage extends Mage {

    public TrollMage(String skill) {
        super(skill, 100);
        agility = 5;
        attack = 12;
        defense = 10;
    }

    @Override
    public void attack() {
        System.out.printf("TrollMage cast a %s%n!", skill);
        super.attack();
    }
}
