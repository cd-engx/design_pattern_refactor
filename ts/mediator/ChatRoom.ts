class ChatRoom {
    private users: User[];

    constructor() {
        this.users = [];
    }

    public addUser(user: User) {
        this.users.push(user);
    }

    public sendMessage(message: string, sender: User) {
        for (const user of this.users) {
            if (user !== sender) {
                user.receiveMessage(message);
            }
        }
    }
}

class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sendMessage(message: string, chatRoom: ChatRoom) {
        chatRoom.sendMessage(message, this);
    }

    public receiveMessage(message: string) {
        console.log(this.name + " received message: " + message);
    }
}

const chatRoom = new ChatRoom();

const user1 = new User("Bob");
chatRoom.addUser(user1);

const user2 = new User("Alice");
chatRoom.addUser(user2);

user1.sendMessage("Hello, Alice!", chatRoom);
user2.sendMessage("Hi, Bob!", chatRoom);

// todo: ChatRoom is Mediator
//  The User class takes a Mediator object as a parameter in its constructor and registers itself with the mediator when it's created.