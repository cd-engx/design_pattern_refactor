package com.epam.eng.pattern.observer;

import java.util.ArrayList;
import java.util.List;

public class NewsAgency {
    private List<String> news = new ArrayList<>();
    private String name;

    public NewsAgency(String name) {
        this.name = name;
    }

    public void addNews(String news) {
        this.news.add(news);
    }

    public void removeNews(String news) {
        this.news.remove(news);
    }

    public void notifySubscribers() {
        for (String news : this.news) {
            System.out.println(name + " is broadcasting: " + news);
        }
    }

    public class Subscriber {
        private String name;

        public Subscriber(String name) {
            this.name = name;
        }

        public void receiveNews(String news) {
            System.out.println(name + " received news: " + news);
        }
    }
}
