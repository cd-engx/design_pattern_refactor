enum UserRole {
    ADMIN = "admin",
    USER = "user"
}

class User {
    private name: string;
    private email: string;
    private role: UserRole;

    constructor(name: string, email: string, role: UserRole) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public getRole(): UserRole {
        return this.role;
    }

    public getEmail(): string {
        return this.email;
    }
}

class Notifier {
    public static notifyUser(user: User, message: string): void {
        switch (user.getRole()) {
            case UserRole.ADMIN:
                console.log("Sending message to admin: " + message);
                break;
            case UserRole.USER:
                console.log("Sending message to user: " + message);
                break;
            default:
                console.log("Invalid role type");
        }
    }
}

class UserFactory {
    static createAdmin(name: string, email: string): User {
        return new User(name, email, UserRole.ADMIN);
    }

    static createUser(name: string, email: string): User {
        return new User(name, email, UserRole.USER);
    }
}

// Usage
const adminUser = UserFactory.createAdmin("John Doe", "john.doe@example.com");
Notifier.notifyUser(adminUser, "This is a notification message");

const regularUser = UserFactory.createUser("Jane Doe", "jane.doe@example.com");
Notifier.notifyUser(regularUser, "Hello Jane!");
