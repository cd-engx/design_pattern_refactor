abstract class EmailClient {
  public sendEmail(recipient: string, subject: string, body: string): void {
    this.connectToServer();
    this.authenticateUser();
    this.specifyRecipients(recipient);
    this.specifySubject(subject);
    this.specifyBody(body);
    this.send();
    this.disconnectFromServer();
  }

  protected abstract connectToServer(): void;
  protected abstract authenticateUser(): void;
  protected abstract specifyRecipients(recipient: string): void;
  protected abstract specifySubject(subject: string): void;
  protected abstract specifyBody(body: string): void;
  protected abstract send(): void;
  protected abstract disconnectFromServer(): void;
}

class GmailEmailClient extends EmailClient {
  protected connectToServer(): void {
    // Connect to Gmail server
  }

  protected authenticateUser(): void {
    // Authenticate user with Gmail
  }

  protected specifyRecipients(recipient: string): void {
    // Specify email recipient(s) for Gmail
  }

  protected specifySubject(subject: string): void {
    // Specify email subject for Gmail
  }

  protected specifyBody(body: string): void {
    // Specify email body for Gmail
  }

  protected send(): void {
    // Send email through Gmail
  }

  protected disconnectFromServer(): void {
    // Disconnect from Gmail server
  }
}

class OutlookEmailClient extends EmailClient {
  protected connectToServer(): void {
    // Connect to Outlook server
  }

  protected authenticateUser(): void {
    // Authenticate user with Outlook
  }

  protected specifyRecipients(recipient: string): void {
    // Specify email recipient(s) for Outlook
  }

  protected specifySubject(subject: string): void {
    // Specify email subject for Outlook
  }

  protected specifyBody(body: string): void {
    // Specify email body for Outlook
  }

  protected send(): void {
    // Send email through Outlook
  }

  protected disconnectFromServer(): void {
    // Disconnect from Outlook server
  }
}
