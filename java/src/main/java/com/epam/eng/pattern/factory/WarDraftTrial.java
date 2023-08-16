package com.epam.eng.pattern.factory;

import com.epam.eng.pattern.factory.human.Cyrocopter;
import com.epam.eng.pattern.factory.human.GnomeMage;
import com.epam.eng.pattern.factory.human.HumanWarrior;
import com.epam.eng.pattern.factory.orc.OrcWarrior;
import com.epam.eng.pattern.factory.orc.TrollMage;
import com.epam.eng.pattern.factory.orc.Wyvern;
import com.epam.eng.pattern.factory.units.Unit;

import java.util.ArrayList;
import java.util.List;

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
