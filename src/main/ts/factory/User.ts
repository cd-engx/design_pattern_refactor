class User {
    private name: string;
    private email: string;
    private role: string;

    constructor(name: string, email: string, role: string) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public notifyUser(message: string): void {
        if (this.role === "admin") {
            console.log("Sending message to admin: " + message);
        } else if (this.role === "user") {
            console.log("Sending message to user: " + message);
        } else {
            console.log("Invalid role type");
        }
    }
}

var user: User = new User("John Doe", "john.doe@example.com", "admin");
user.notifyUser("This is a notification message");
