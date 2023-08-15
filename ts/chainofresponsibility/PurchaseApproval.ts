
class PurchaseRequest {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public getAmount(): number {
        return this.amount;
    }
}

class Manager {

    public approve(request: PurchaseRequest) {
        if (request.getAmount() <= 1000) {
            console.log("Manager approved the purchase request!");
        } else {
            console.log("Manager cannot approve the purchase request. Forwarding to Director...");
            new Director().approve(request);
        }
    }
}

class Director {

    public approve(request: PurchaseRequest) {
        if (request.getAmount() <= 5000) {
            console.log("Director approved the purchase request!");
        } else {
            console.log("Director cannot approve the purchase request. Forwarding to Vice President...");
            new VicePresident().approve(request);
        }
    }
}

class VicePresident {

    public approve(request: PurchaseRequest) {
        if (request.getAmount() <= 10000) {
            console.log("Vice President approved the purchase request!");
        } else {
            console.log("Vice President cannot approve the purchase request. Request denied.");
        }
    }
}


var request = new PurchaseRequest(8000);
var manager = new Manager();
manager.approve(request);
