package com.epam.eng.pattern.factory.orc;

import com.epam.eng.pattern.factory.units.FlyingUnits;

public class Wyvern extends FlyingUnits {

        public Wyvern() {
            super();
            agility = 6;
            attack = 12;
            defense = 10;
        }

        @Override
        public void attack() {
            System.out.println("Wyvern throws a bomb!");
            super.attack();
        }
}
