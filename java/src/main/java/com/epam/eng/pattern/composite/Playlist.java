package com.epam.eng.pattern.composite;

public class Playlist {
    
}

class Song {
    private String name;
    private String artist;
    private double duration;

    public Song(String name, String artist, double duration) {
        this.name = name;
        this.artist = artist;
        this.duration = duration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }

    public void play() {
        System.out.println("Playing song '" + name + "' by " + artist + " (" + duration + " seconds)");
    }
}