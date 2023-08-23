/**
 * To refactor this code using the State pattern,
 * you can create a SignalState interface and implement concrete state classes for each state (Red, Green, Yellow).
 * The TrafficSignal class will then delegate state-specific behavior to these state classes.
 */

// Define the SignalState interface
interface SignalState {
    runSignal(trafficSignal: TrafficSignal): Promise<void>;
    next(): void;
}

// Implement the concrete state classes for Red, Green, and Yellow lights
class RedLight implements SignalState {
    async runSignal(trafficSignal: TrafficSignal): Promise<void> {
        console.log("Red Light for 30 seconds...");
        await trafficSignal.sleep(3000);
        trafficSignal.next();
    }

    next(): void {
        trafficSignal.setState(new GreenLight());
    }
}

class GreenLight implements SignalState {
    async runSignal(trafficSignal: TrafficSignal): Promise<void> {
        console.log("Green Light for 60 seconds...");
        await trafficSignal.sleep(6000);
        trafficSignal.next();
    }

    next(): void {
        trafficSignal.setState(new YellowLight());
    }
}

class YellowLight implements SignalState {
    async runSignal(trafficSignal: TrafficSignal): Promise<void> {
        console.log("Yellow Light for 10 seconds...");
        await trafficSignal.sleep(1000);
        trafficSignal.next();
    }

    next(): void {
        trafficSignal.setState(new RedLight());
    }
}

// Update the TrafficSignal class to work with SignalState objects
class TrafficSignal {
    private state: SignalState;

    constructor() {
        this.state = new RedLight();
    }

    public setState(state: SignalState): void {
        this.state = state;
    }

    public sleep(timeout: number) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    public async runSignal() {
        while (true) {
            await this.state.runSignal(this);
        }
    }

    public next(): void {
        this.state.next();
    }
}

// Usage is the same
var trafficSignal = new TrafficSignal();
trafficSignal.runSignal();

/**
 * Now, the TrafficSignal class delegates state-specific behavior to state classes that implement the SignalState interface.
 * This makes the code more flexible and extensible,
 * as adding new states or modifying existing states becomes easier without affecting the TrafficSignal class.
 */