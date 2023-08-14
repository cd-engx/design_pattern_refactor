package com.epam.eng.pattern.adapter.thirdparty;

public class AmericanPlug implements IAmericanPlug {
    @Override
    public void supplyCommercialElectricity(int voltage, int frequency) {
        System.out.println("American plug is supplying " + voltage + "V " + frequency + "Hz");
    }
}
