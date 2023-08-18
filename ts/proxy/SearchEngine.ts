// The proxy pattern is an underrated yet powerful design pattern that helps solve some very difficult problems , it's goal is to create a substitute for something else so 
// that everything has to go throught the substitute first to reach the actual object

interface SearchEngine {
    search(query: string): string;
}

class GoogleSearchEngine implements SearchEngine {
    search(query: string): string {
        console.log(`Performing Google search for query: ${query}`);
        return `Google search results for query: ${query}`;
    }
}

class EngineProxy implements SearchEngine {
    private googleSearchEngine: GoogleSearchEngine;

    constructor(googleSearchEngine: GoogleSearchEngine) {
        this.googleSearchEngine = googleSearchEngine;
    }

    public search(query: string) {
        return this.googleSearchEngine.search(query)
    }
}

const searchEngine: GoogleSearchEngine = new GoogleSearchEngine();
const proxy = new EngineProxy(searchEngine);
proxy.search("this is a test info")
// todo: consider to create a Search Engine Proxy class, which is responsible to call GoogleSearchEngine