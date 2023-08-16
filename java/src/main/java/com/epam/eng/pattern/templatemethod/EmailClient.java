package com.epam.eng.pattern.templatemethod;

public class EmailClient {
    private GmailEmail gmailEmail;
    private OutlookEmail outlookEmail;

    public void sendEmail(String recipient, String subject, String body) {
        connectToServer();
        authenticateUser();
        specifyRecipients(recipient);
        specifySubject(subject);
        specifyBody(body);
        send();
        disconnectFromServer();
    }

    private void connectToServer() {
        // Connect to email server
        if (gmailEmail != null) {
            gmailEmail.connectToServer();
        } else if (outlookEmail != null) {
            outlookEmail.connectToServer();
        }
    }

    private void authenticateUser() {
        // Authenticate user
    }

    private void specifyRecipients(String recipient) {
        // Specify email recipient(s)
    }

    private void specifySubject(String subject) {
        // Specify email subject
    }

    private void specifyBody(String body) {
        // Specify email body
    }

    private void send() {
        // Send email
        if (gmailEmail != null) {
            gmailEmail.send();
        } else if (outlookEmail != null) {
            outlookEmail.send();
        }
    }

    private void disconnectFromServer() {
        // Disconnect from email server
    }
}

class GmailEmail {
    public void connectToServer() {
    }

    public void send() {
    }

    // other methods...
}

class OutlookEmail {
    public void connectToServer() {
    }

    public void send() {
    }

    // other methods...
}

// todo: consider to abstract EmailClient template, so that Gmail and Outlook can implement it
