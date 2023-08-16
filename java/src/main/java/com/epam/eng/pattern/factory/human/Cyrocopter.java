package com.epam.eng.pattern.factory.human;

import com.epam.eng.pattern.factory.units.FlyingUnits;

public class Cyrocopter extends FlyingUnits {

    public Cyrocopter() {
        super();
        agility = 9;
        attack = 9;
        defense = 10;
    }

    @Override
    public void attack() {
        System.out.println("Cyrocopter throws a bomb!");
        super.attack();
    }
}
