interface SearchEngine {
    search(query: string): string;
}

class GoogleSearchEngine implements SearchEngine {
    search(query: string): string {
        console.log(`Performing Google search for query: ${query}`);
        return `Google search results for query: ${query}`;
    }
}

var searchEngine: GoogleSearchEngine = new GoogleSearchEngine();
var result = searchEngine.search("NEWS");
