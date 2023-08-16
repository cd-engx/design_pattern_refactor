package com.epam.eng.pattern.adapter.thirdparty;

public class ChinesePlug implements IChinesePlug{
    private int frequency;
    private int voltage;

    @Override
    public void setPowerFrequency(int frequency) {
        this.frequency = frequency;
        System.out.println("Power frequency is set to " + frequency + "Hz");
    }

    @Override
    public void setPowerVoltage(int voltage) {
        this.voltage = voltage;
        System.out.println("Power voltage is set to " + voltage + "V");
    }

    @Override
    public void supplyPower() {
        System.out.println("Supplying power with " + voltage + "V" + frequency + "Hz");
    }
}
