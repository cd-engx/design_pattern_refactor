export abstract class UserFactory {
  abstract createUser(name: string, email: string): User
}

export class User {
  private name: string
  private email: string
  private role: string

  constructor(name: string, email: string, role: string) {
    this.name = name
    this.email = email
    this.role = role
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return this.role
  }

  public notifyUser(message: string): void {
    console.log('Sending message to ' + this.role + ': ' + message)
  }
}

export class AdminUserFactory extends UserFactory {
  createUser(name: string, email: string): User {
    return new User(name, email, 'admin')
  }
}

export class RegularUserFactory extends UserFactory {
  createUser(name: string, email: string): User {
    return new User(name, email, 'user')
  }
}

const adminUserFactory = new AdminUserFactory()
const regularUserFactory = new RegularUserFactory()

const adminUser = adminUserFactory.createUser('Bruce Lee', 'bruce_lee@epam.com')
adminUser.notifyUser('This is a notification message for admin')

const regularUser = regularUserFactory.createUser('Peel Joe', 'peel_joe@epam.com')
regularUser.notifyUser('This is a notification message for user')
