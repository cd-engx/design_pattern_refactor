/**
 * To refactor this code using the Chain of Responsibility pattern, 
 * you can create an Approver interface and separate the responsibilities of each role (Manager, Director, Vice President) into a chain
 */

interface Approver {
    setNextApprover(approver: Approver): void;
    approve(request: PurchaseRequest): void;
}

class PurchaseRequest {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    public getAmount(): number {
        return this.amount;
    }
}

class Manager implements Approver {
    private nextApprover: Approver | null = null;

    public setNextApprover(approver: Approver): void {
        this.nextApprover = approver;
    }

    public approve(request: PurchaseRequest): void {
        if (request.getAmount() <= 1000) {
            console.log("Manager approved the purchase request!");
        } else if (this.nextApprover) {
            console.log("Manager cannot approve the purchase request. Forwarding to next approver...");
            this.nextApprover.approve(request);
        }
    }
}

class Director implements Approver {
    private nextApprover: Approver | null = null;

    public setNextApprover(approver: Approver): void {
        this.nextApprover = approver;
    }

    public approve(request: PurchaseRequest): void {
        if (request.getAmount() <= 5000) {
            console.log("Director approved the purchase request!");
        } else if (this.nextApprover) {
            console.log("Director cannot approve the purchase request. Forwarding to next approver...");
            this.nextApprover.approve(request);
        }
    }
}

class VicePresident implements Approver {
    private nextApprover: Approver | null = null;

    public setNextApprover(approver: Approver): void {
        this.nextApprover = approver;
    }

    public approve(request: PurchaseRequest): void {
        if (request.getAmount() <= 10000) {
            console.log("Vice President approved the purchase request!");
        } else if (this.nextApprover) {
            console.log("Vice President cannot approve the purchase request. Forwarding to next approver...");
            this.nextApprover.approve(request);
        } else {
            console.log("Vice President cannot approve the purchase request. Request denied.");
        }
    }
}

// Usage example
const request = new PurchaseRequest(8000);

const manager = new Manager();
const director = new Director();
const vicePresident = new VicePresident();

manager.setNextApprover(director);
director.setNextApprover(vicePresident);

manager.approve(request);

/**
 * Now, each role in the approval chain implements the Approver interface and delegates requests to the next approver in line if it can't handle the request. 
 * You can easily add new roles to the chain without modifying the existing roles and easily change the order of the chain if needed.
 */