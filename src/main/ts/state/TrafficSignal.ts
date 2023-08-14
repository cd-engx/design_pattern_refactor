class TrafficSignal {
    private state: number;

    constructor() {
        this.state = 0;
    }

    public setState(state: number): void {
        this.state = state;
    }

    public async runSignal() {
        while (true) {
            switch (this.state) {
                case 0:
                    console.log("Red Light for 30 seconds...");

                    await this.sleep(3000);
                    this.setState(1);

                    break;
                case 1:
                    console.log("Green Light for 60 seconds...");

                    await this.sleep(6000);
                    this.setState(2);

                    break;
                case 2:
                    console.log("Yellow Light for 10 seconds...");

                    await this.sleep(1000);
                    this.setState(0);
                    
                    break;
                default:
                    console.error("Invalid state");
                    break;
            }
        }
    }

    async sleep(timeout: number) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
}

var trafficSignal = new TrafficSignal();
trafficSignal.runSignal();
