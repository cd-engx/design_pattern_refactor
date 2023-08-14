package com.epam.eng.pattern.adapter.thirdparty;

public class ChinesePlug implements IChinesePlug{
    @Override
    public void supplyPower(int voltage) {
        System.out.println("Supplying power with " + voltage + "V");
    }
}
