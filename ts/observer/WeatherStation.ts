interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

class WeatherStation implements Subject {
  private temperature: number;
  private humidity: number;
  private pressure: number;
  private observers: Observer[] = [];

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }

  public measureWeather(): void {
    const temperature: number = this.getTemperatureFromSensor();
    const humidity: number = this.getHumidityFromSensor();
    const pressure: number = this.getPressureFromSensor();

    this.setMeasurements(temperature, humidity, pressure);
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

class WeatherDisplay implements Observer {
  private temperature: number;
  private humidity: number;
  private pressure: number;

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  public display(): void {
    console.log(
      `Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressure: ${this.pressure}`
    );
  }
}
