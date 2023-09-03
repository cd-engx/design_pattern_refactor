interface IPlayable {
    play(): void;
}

class Playlist implements IPlayable {
    private playables: IPlayable[];

    constructor() {
        this.playables = [];
    }

    public add(playable: IPlayable): void {
        this.playables.push(playable);
    }

    public remove(playable: IPlayable): void {
        const index = this.playables.indexOf(playable);
        if (index >= 0) {
            this.playables.splice(index, 1);
        }
    }

    public play(): void {
        console.log(`Playing Playlist:`);
        for(const playable of this.playables) {
            playable.play();
        }
    }
}

class Song implements IPlayable {
    constructor(private name: string, private artist: string, private duration: number) {
    }

    // Getters and setters...

    public play(): void {
        console.log(`Playing song '${this.name}' by ${this.artist} (${this.duration} seconds)`);
    }
}

const song1 = new Song("Song1", "Artist1", 180);
const song2 = new Song("Song2", "Artist2", 200);
const song3 = new Song("Song3", "Artist3", 240);

const playlist1 = new Playlist();
playlist1.add(song1);
playlist1.add(song2);

const playlist2 = new Playlist();
playlist2.add(song3);

const mainPlaylist = new Playlist();
mainPlaylist.add(playlist1);
mainPlaylist.add(playlist2);

mainPlaylist.play();