class EmailClient {
    private gmailEmail: GmailEmail;
    private outlookEmail: OutlookEmail;

    public sendEmail(recipient: string, subject: string, body: string): void {
        this.connectToServer();
        this.authenticateUser();
        this.specifyRecipients(recipient);
        this.specifySubject(subject);
        this.specifyBody(body);
        this.send();
        this.disconnectFromServer();
    }

    private connectToServer(): void {
        // Connect to email server
        if (this.gmailEmail != null) {
            this.gmailEmail.connectToServer();
        } else if (this.outlookEmail != null) {
            this.outlookEmail.connectToServer();
        }
    }

    private authenticateUser(): void {
        // Authenticate user
    }

    private specifyRecipients(recipient: string): void {
        // Specify email recipient(s)
    }

    private specifySubject(subject: string): void {
        // Specify email subject
    }

    private specifyBody(body: string): void {
        // Specify email body
    }

    private send(): void {
        // Send email
        if (this.gmailEmail != null) {
            this.gmailEmail.send();
        } else if (this.outlookEmail != null) {
            this.outlookEmail.send();
        }
    }

    private disconnectFromServer(): void {
        // Disconnect from email server
    }
}

class GmailEmail {
    public connectToServer(): void {
    }

    public send(): void {
    }

    // other methods...
}

class OutlookEmail {
    public connectToServer(): void {
    }

    public send(): void {
    }

    // other methods...
}