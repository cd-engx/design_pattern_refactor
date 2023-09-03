abstract class EmailProvider {
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
  
  class GmailEmail extends EmailProvider {
    protected connectToServer(): void {
      // Connect to Gmail server
    }
  
    protected authenticateUser(): void {
      // Authenticate Gmail user
    }
  
    protected specifyRecipients(recipient: string): void {
      // Specify Gmail email recipient(s)
    }
  
    protected specifySubject(subject: string): void {
      // Specify Gmail email subject
    }
  
    protected specifyBody(body: string): void {
      // Specify Gmail email body
    }
  
    protected send(): void {
      // Send Gmail email
    }
  
    protected disconnectFromServer(): void {
      // Disconnect from Gmail server
    }
  
    // other methods...
  }
  
  class OutlookEmail extends EmailProvider {
    protected connectToServer(): void {
      // Connect to Outlook server
    }
  
    protected authenticateUser(): void {
      // Authenticate Outlook user
    }
  
    protected specifyRecipients(recipient: string): void {
      // Specify Outlook email recipient(s)
    }
  
    protected specifySubject(subject: string): void {
      // Specify Outlook email subject
    }
  
    protected specifyBody(body: string): void {
      // Specify Outlook email body
    }
  
    protected send(): void {
      // Send Outlook email
    }
  
    protected disconnectFromServer(): void {
      // Disconnect from Outlook server
    }
  
    // other methods...
  }

  class EmailClient {
    private gmailEmail: GmailEmail;
    private outlookEmail: OutlookEmail;
  
    public sendGmailEmail(recipient: string, subject: string, body: string): void {
      this.gmailEmail.sendEmail(recipient, subject, body);
    }
  
    public sendOutlookEmail(recipient: string, subject: string, body: string): void {
      this.outlookEmail.sendEmail(recipient, subject, body);
    }
  }