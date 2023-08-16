package com.epam.eng.pattern.adapter.thirdparty;

public class AmericanPlug implements IAmericanPlug {
    @Override
    public void supplyCommercialElectricity(int voltage, int frequency) {
        System.out.printf("American plug start supplying electricity of %d volts and %d Hz%n", voltage, frequency);
    }
}
