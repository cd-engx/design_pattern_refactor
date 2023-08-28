class Sedan {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start(): void {
        console.log(this.brand + " Sedan started");
    }

    stop(): void {
        console.log(this.brand + " Sedan stopped");
    }
}

class Suv {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start(): void {
        console.log(this.brand + " SUV started");
    }

    stop(): void {
        console.log(this.brand + " SUV stopped");
    }
}



const toyotaSedan = new Sedan("Toyota");
const toyotaSuv = new Suv("Toyota");
const fordSedan = new Sedan("Ford");
const fordSuv = new Suv("Ford");

toyotaSedan.start();
toyotaSedan.stop();
toyotaSuv.start();
toyotaSuv.stop();
fordSedan.start();
fordSedan.stop();
fordSuv.start();
fordSuv.stop();


// todo: Toyota Factory produce Toyota vehicle(Sedan / SUV), Ford Factory produce Ford vehicle(Sedan / SUV). use abstract factory pattern to abstract them.
