 class Playlist {
    
}

 class Song {
    private name: string;
    private artist: string;
    private duration: number;

    constructor(name: string, artist: string, duration: number) {
        this.name = name;
        this.artist = artist;
        this.duration = duration;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getArtist(): string {
        return this.artist;
    }

    public setArtist(artist: string): void {
        this.artist = artist;
    }

    public getDuration(): number {
        return this.duration;
    }

    public setDuration(duration: number): void {
        this.duration = duration;
    }

    public play(): void {
        console.log(`Playing song '${this.name}' by ${this.artist} (${this.duration} seconds)`);
    }
}

var playList = new Playlist();
//playList.play();

