  class ShoppingCart {
    private items: Item[] = [];

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public removeItem(item: Item): void {
        this.items.splice(this.items.findIndex(i => i === item), 1);
    }

    public calculateTotal(): number {
        let total = 0.0;
        for (let item of this.items) {
            total += item.getPrice();
        }
        return total;
    }

    public pay(paymentMethod: string): void {
        const total = this.calculateTotal();
        if (paymentMethod === "credit_card") {
            console.log("Payment made with credit card: $" + total);
        } else if (paymentMethod === "paypal") {
            console.log("Payment made with PayPal: $" + total);
        } else {
            throw new Error("Unknown payment method: " + paymentMethod);
        }
    }

}

class Item {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }
}

// todo: consider to abstract payment
