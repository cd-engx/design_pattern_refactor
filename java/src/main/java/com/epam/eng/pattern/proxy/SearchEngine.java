package com.epam.eng.pattern.proxy;

public interface SearchEngine {
    String search(String query);
}

class GoogleSearchEngine implements SearchEngine {
    public String search(String query) {
        System.out.println("Performing Google search for query: " + query);
        return "Google search results for query: " + query;
    }
}

// todo: consider to create a Search Engine Proxy class, which is responsible to call GoogleSearchEngine