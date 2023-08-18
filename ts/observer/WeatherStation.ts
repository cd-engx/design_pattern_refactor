interface IWeather {
    temperature: number;
    humidity: number;
    pressure: number;
    notify(): void
}

class Weather implements IWeather {
    temperature: number;
    humidity: number;
    pressure: number;

    constructor(temperature: number, humidity: number, pressure: number ) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }

    notify(): void {
        console.log(`
            the temperature is ${this.temperature},
            the humidity is ${this.humidity},
            the pressure is ${this.pressure},
        `)
    }
}

class WeatherStation {
    observers: IWeather[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IWeather){
        this.observers.push(observer);
    }

    unsubscribe(observer: IWeather) {
        const index: number = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyAll(): void {
        this.observers.forEach((observer) => {
            observer.notify()
        })
    }
}

const weather1 = new Weather(20, 30, 20);
const weather2 = new Weather(11, 33, 23);
const weather3 = new Weather(45, 34, 56);

const weatherStation = new WeatherStation();

weatherStation.subscribe(weather1);
weatherStation.subscribe(weather2);
weatherStation.subscribe(weather3);

weatherStation.notifyAll();
