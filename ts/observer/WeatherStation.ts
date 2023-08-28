class WeatherStation {
    private temperature: number;
    private humidity: number;
    private pressure: number;

    public setTemperature(temperature: number): void {
        this.temperature = temperature;
    }

    public setHumidity(humidity: number): void {
        this.humidity = humidity;
    }

    public setPressure(pressure: number): void {
        this.pressure = pressure;
    }

    public measureWeather(): void {
        const temperature: number = this.getTemperatureFromSensor();
        const humidity: number = this.getHumidityFromSensor();
        const pressure: number = this.getPressureFromSensor();

        this.setTemperature(temperature);
        this.setHumidity(humidity);
        this.setPressure(pressure);
    }

    private getPressureFromSensor(): number {
        return 1;
    }

    private getHumidityFromSensor(): number {
        return 1;
    }

    private getTemperatureFromSensor(): number {
        return 1;
    }
}

// todo: consider to Register Subscriber into WeatherStation as an observer to receive weather.
