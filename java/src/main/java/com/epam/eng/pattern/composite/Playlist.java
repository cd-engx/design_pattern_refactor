package com.epam.eng.pattern.composite;

import java.util.ArrayList;
import java.util.List;

public class Playlist {
    private String name;
    private List<Song> songs;

    public Playlist(String name) {
        this.name = name;
        this.songs = new ArrayList<>();
    }

    public void addSong(Song song) {
        songs.add(song);
    }

    public void removeSong(Song song) {
        songs.remove(song);
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void play() {
        System.out.println("Playing playlist '" + name + "'");
        for (Song song : songs) {
            song.play();
        }
    }
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

// todo: consider to create a hierarchy of playlists and songs, treating them all as uniform objects. PlayList can be tree structures, it might contains list of songs or other play list.
