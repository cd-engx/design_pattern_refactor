class Coffee {
    private size: string;
    private milk: boolean;
    private sugar: boolean;
    private cost: number;

    constructor(size: string, milk: boolean, sugar: boolean, cost: number) {
        this.size = size;
        this.milk = milk;
        this.sugar = sugar;
        this.cost = cost;
    }

    public getDescription(): string {
        let description = this.size;
        if (this.milk) {
            description += " with milk";
        }
        if (this.sugar) {
            description += " with sugar";
        }
        return description;
    }

    public getCost(): number {
        return this.cost;
    }
}

// todo: consider to decorator Coffee with sugar, with milk.

