package com.epam.eng.pattern.observer;

public class WeatherStation {
    private int temperature;
    private int humidity;
    private int pressure;

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public void setHumidity(int humidity) {
        this.humidity = humidity;
    }

    public void setPressure(int pressure) {
        this.pressure = pressure;
    }

    public void measureWeather() {

        int temperature = getTemperatureFromSensor();
        int humidity = getHumidityFromSensor();
        int pressure = getPressureFromSensor();

        setTemperature(temperature);
        setHumidity(humidity);
        setPressure(pressure);
    }

    private int getPressureFromSensor() {
        return 1;
    }

    private int getHumidityFromSensor() {
        return 1;
    }

    private int getTemperatureFromSensor() {
        return 1;
    }

}