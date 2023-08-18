
interface IUser {
    name: string;
    email: string;
    notify(): void;
}

class Admin implements IUser {
    name: string;
    email: string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
   
    notify() {
        console.log("this is message from" + this.name)
    }
}

class User implements IUser {
    name: string;
    email: string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    notify() {
        console.log("this is message from" + this.name)
    }
}

class RoleFactory {
    static createRole(role: string) {
        if (role === "admin") {
            return new Admin("DaJing", "Dajin@epam.com")
        } else if (role === "user") {
            return new User("Krauser", "Krauser@epam.com")
        } else {
            throw new Error("This kind of role doesn't exist!")
        }
    }
}

const amdin = RoleFactory.createRole("amdin");
const user = RoleFactory.createRole("uesr");

amdin.notify();
user.notify()
