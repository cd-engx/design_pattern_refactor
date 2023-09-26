interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log("Payment made with credit card: $" + amount);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log("Payment made with PayPal: $" + amount);
  }
}

class ShoppingCart {
  private items: Item[] = [];

  constructor() {
    this.items = [];
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public removeItem(item: Item): void {
    this.items.splice(
      this.items.findIndex((i) => i === item),
      1
    );
  }

  public calculateTotal(): number {
    let total = 0.0;
    for (let item of this.items) {
      total += item.getPrice();
    }
    return total;
  }

  public pay(paymentStrategy: PaymentStrategy): void {
    const total = this.calculateTotal();
    paymentStrategy.pay(total);
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

const cart = new ShoppingCart();
const item1 = new Item("Book", 10);
const item2 = new Item("Pen", 2);

cart.addItem(item1);
cart.addItem(item2);

cart.pay(new CreditCardPayment());
cart.pay(new PayPalPayment());
