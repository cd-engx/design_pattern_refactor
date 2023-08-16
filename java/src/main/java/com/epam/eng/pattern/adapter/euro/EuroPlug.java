package com.epam.eng.pattern.adapter.euro;

public class EuroPlug implements IEuroPlug {

    @Override
    public void supplyPower(int voltage, int frequency) {
        System.out.println(String.format("Start to supply electricity of %d volts and %d Hz", voltage, frequency));
    }
}
