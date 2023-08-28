class Car {
    private model: string;
    private color: string;
    private year: number;
    private price: number;

    constructor(model: string, color: string, year: number, price: number) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
    }

    public assemble(): void {
        console.log(`Assembling ${this.model}...`);
    }

    public applyColor(): void {
        console.log(`Applying ${this.color} color to ${this.model}...`);
    }

    public applyWarranty(): void {
        console.log(`Applying warranty to ${this.model}...`);
    }

    public calculatePrice(): void {
        console.log(`Calculating price for ${this.model}...`);
    }

    public getModel(): string {
        return this.model;
    }

    public getColor(): string {
        return this.color;
    }

    public getYear(): number {
        return this.year;
    }

    public getPrice(): number {
        return this.price;
    }
}

/**
 * todo:
 * This program represents a Car class with several methods for assembling, applying color, applying warranty, and calculating the price of the car. These methods are currently mixed in with the Car class, leading to a potential code smell.
 * To refactor this program using the Visitor Pattern, we can create an visitor interface and car object accept Visitor.
 */
