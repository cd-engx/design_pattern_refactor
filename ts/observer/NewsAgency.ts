export class Subscriber {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public receiveNews(news: string): void {
        console.log(this.name + " received news: " + news);
    }
}

export class NewsAgency {
    private name: string;
    private subscribes: Subscriber[] = [];

    constructor(name: string) {
        this.name = name;
    }

    subscribe(observer: Subscriber){
        this.subscribes.push(observer);
    }

    unsubscribe(observer: Subscriber) {
        const index: number = this.subscribes.indexOf(observer);
        if (index !== -1) {
            this.subscribes.splice(index, 1);
        }
    }

    public notifySubscribers(news: string): void {
        for (const subscribe of this.subscribes) {
            subscribe.receiveNews(news)
        }
    }

}

const newsAgency = new NewsAgency("BBC")
const Subscriber1 = new Subscriber("DaJing")
const Subscriber2 = new Subscriber("Krauser")
const Subscriber3 = new Subscriber("Nick")

newsAgency.subscribe(Subscriber1)
newsAgency.subscribe(Subscriber2)
newsAgency.subscribe(Subscriber3)

newsAgency.notifySubscribers("we win!!!")



// todo: consider to Register Subscriber into NewsAgency as an observer to receive news.
