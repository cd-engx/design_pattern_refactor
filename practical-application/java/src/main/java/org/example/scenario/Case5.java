package org.example.scenario;

class FileDownloader {
    public void download(String fileUrl) {
        System.out.println("Downloading file from: " + fileUrl);
    }
}

/**
 * FileDownloader is a third party class, we can not change it.
 * please create a new class and adding security or access control features before download.
 */