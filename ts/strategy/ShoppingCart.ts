 interface Payment {
    pay(total: number): void;
 }
 
 class CreditCardPay implements Payment {
    pay(total: number) {
        console.log("Payment made with credit card: $" + total);
    }
 }

 class PaypalPay implements Payment {
    pay(total: number) {
        console.log("Payment made with PayPal: $" + total);
    }
 }


 class ShoppingCart {
    payment: Payment;
    private items: Item[] = [];

    constructor(payment: Payment) {
        this.payment = payment;
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

    public pay(): void {
        const total = this.calculateTotal();
        this.payment.pay(total);
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

const creditCardPay = new CreditCardPay();
const shoppingCartPayByCreditCard = new ShoppingCart(creditCardPay);

const paypalPay = new PaypalPay();
const shoppingCartPayBypalPay = new ShoppingCart(paypalPay);

const milkItem = new Item("milk", 300);
const riceItem = new Item("rice", 9000);
const porkItem = new Item("Pock", 400);


shoppingCartPayByCreditCard.addItem(milkItem);
shoppingCartPayByCreditCard.addItem(riceItem);
shoppingCartPayByCreditCard.addItem(porkItem);
shoppingCartPayByCreditCard.pay()


shoppingCartPayBypalPay.addItem(milkItem);
shoppingCartPayBypalPay.addItem(riceItem);
shoppingCartPayBypalPay.addItem(porkItem);
shoppingCartPayBypalPay.pay();


