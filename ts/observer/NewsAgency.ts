interface NewsObserver {
  receiveNews(news: string): void;
}

class NewsAgency {
  private news: string[] = [];
  private name: string;
  private observers: NewsObserver[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addObserver(observer: NewsObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: NewsObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public addNews(news: string): void {
    this.news.push(news);
    this.notifySubscribers(news);
  }

  public removeNews(news: string): void {
    const index: number = this.news.indexOf(news);
    if (index !== -1) {
      this.news.splice(index, 1);
    }
  }

  public notifySubscribers(news: string): void {
    for (const observer of this.observers) {
      observer.receiveNews(this.name + " is broadcasting: " + news);
    }
  }
}

class Subscriber implements NewsObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public receiveNews(news: string): void {
    console.log(this.name + " received news: " + news);
  }
}

const newsAgency = new NewsAgency("Colson");
const subscriber1 = new Subscriber("Alice");
const subscriber2 = new Subscriber("Bob");

newsAgency.addObserver(subscriber1);
newsAgency.addObserver(subscriber2);

newsAgency.addNews("Headline 1");
newsAgency.addNews("Headline 2");
