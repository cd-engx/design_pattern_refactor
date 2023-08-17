package com.epam.eng.pattern.factoryabstract;

import java.util.ArrayList;
import java.util.List;

abstract class Unit {
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

abstract class FlyingUnits extends Unit {
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

abstract class Mage extends Unit{
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

abstract class Warrior extends Unit {
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


class OrcWarrior extends Warrior {
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

class TrollMage extends Mage {

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

class Wyvern extends FlyingUnits {

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


class Cyrocopter extends FlyingUnits {

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

class GnomeMage extends Mage {

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

class HumanWarrior extends Warrior {
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


public class WarDraftTrial {

    public void tryAllUnits(List<Unit> units) {
        units.forEach(unit -> {
            unit.attack();
            unit.levelUp();
            System.out.println(unit);
        });
    }

    public void orcTrial() {
        OrcWarrior warrior = new OrcWarrior("Axe");
        TrollMage mage = new TrollMage("Fireball");
        Wyvern wyvern = new Wyvern();
        ArrayList<Unit> orcUnits = new ArrayList<>();
        orcUnits.add(warrior);
        orcUnits.add(mage);
        orcUnits.add(wyvern);
        tryAllUnits(orcUnits);
    }

    public void humanTrial() {
        HumanWarrior warrior = new HumanWarrior("Sword");
        GnomeMage mage = new GnomeMage("IceArrow");
        Cyrocopter cyrocopter = new Cyrocopter();
        ArrayList<Unit> humanUnits = new ArrayList<>();
        humanUnits.add(warrior);
        humanUnits.add(mage);
        humanUnits.add(cyrocopter);
        tryAllUnits(humanUnits);
    }

    public static void main(String[] args) {
        WarDraftTrial warDraftTrial = new WarDraftTrial();
        warDraftTrial.orcTrial();
        warDraftTrial.humanTrial();
        // TODO: Use the abstract factory pattern to refactor the code above. Only one trial method is enough.
    }
}
