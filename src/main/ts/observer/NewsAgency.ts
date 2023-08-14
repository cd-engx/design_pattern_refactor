class NewsAgency {
    private news: string[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public addNews(news: string): void {
        this.news.push(news);
    }

    public removeNews(news: string): void {
        const index: number = this.news.indexOf(news);
        if (index !== -1) {
            this.news.splice(index, 1);
        }
    }

    public notifySubscribers(): void {
        for (const news of this.news) {
            console.log(this.name + " is broadcasting: " + news);
        }
    }
}

class Subscriber {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public receiveNews(news: string): void {
        console.log(this.name + " received news: " + news);
    }
}

var newsAgency = new NewsAgency("Colson");
newsAgency.addNews("Headline 1");
newsAgency.addNews("Headline 2");
newsAgency.notifySubscribers();


