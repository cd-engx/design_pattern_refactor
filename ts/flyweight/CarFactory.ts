class Car {
    private make: string;
    private model: string;
    private year: number;
    private color: string;

    constructor(make: string, model: string, year: number, color: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    equals(o: any): boolean {
        if (this === o) return true;
        if (o == null || this.constructor !== o.constructor) return false;
        const car: Car = o;
        return this.year === car.year && this.make === car.make && this.model === car.model && this.color === car.color;
    }

    hashCode(): number {
        return hash(this.make, this.model, this.year, this.color);
    }
}

function hash(...args: any): number {
    return args.reduce((prev: number, curr: any) => {
        return prev + (curr != null ? curr.hashCode() : 0);
    }, 0);
}

class CarFactory {
    static getCar(make: string, model: string, year: number, color: string): Car {
        return new Car(make, model, year, color);
    }
}

// todo: use Flyweight Pattern, in CarFactory, Car objects will only be created if they do not already exist in the cache.
