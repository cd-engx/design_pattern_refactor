package com.epam.eng.pattern.factory.human;

import com.epam.eng.pattern.factory.units.Mage;

public class GnomeMage extends Mage {

    public GnomeMage(String skill) {
        super(skill, 110);
        agility = 5;
        attack = 12;
        defense = 10;
    }

    @Override
    public void attack() {
        System.out.printf("GnomeMage cast a %s%n!", skill);
        super.attack();
    }
}
