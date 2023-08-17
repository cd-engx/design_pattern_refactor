package com.epam.eng.pattern.adapter;

interface IAmericanPlug {
    void supplyCommercialElectricity(int voltage, int frequency);
}

class AmericanPlug implements IAmericanPlug {
    @Override
    public void supplyCommercialElectricity(int voltage, int frequency) {
        System.out.printf("American plug start supplying electricity of %d volts and %d Hz%n", voltage, frequency);
    }
}

interface IChinesePlug {
    void setPowerFrequency(int frequency);

    void setPowerVoltage(int voltage);

    void supplyPower();
}

class ChinesePlug implements IChinesePlug {
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
        System.out.printf("Chinese plug start supplying electricity of %d volts and %d Hz%n ", voltage, frequency);
    }
}

interface IEuroPlug {

    void supplyPower(int voltage, int frequency);
}

class EuroPlug implements IEuroPlug {

    @Override
    public void supplyPower(int voltage, int frequency) {
        System.out.printf("Start to supply electricity of %d volts and %d Hz%n", voltage, frequency);
    }
}

public class EuropeanSocket {

    public void plugIn(IEuroPlug euroPlug) {
        euroPlug.supplyPower(230, 50);
    }

    public static void main(String[] args) {
        EuropeanSocket socket = new EuropeanSocket();
        socket.plugIn(new EuroPlug());
        // TODO: Use the AmericanPlug in a European socket
        // TODO: Use the ChinesePlug in a European socket
    }
}
