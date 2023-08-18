import {
    User,
    UserFactory,
    AdminUserFactory,
    RegularUserFactory,
  } from './User'
  
  describe('UserFactory', () => {
    const adminUserFactory: UserFactory = new AdminUserFactory();
    const regularUserFactory: UserFactory = new RegularUserFactory();
  
    test('AdminUserFactory should create User instances with role "admin"', () => {
      const adminUser = adminUserFactory.createUser('Bruce Lee', 'bruce_lee@epam.com');
      expect(adminUser).toBeInstanceOf(User);
      expect(adminUser.getRole()).toEqual('admin');
    });
  
    test('RegularUserFactory should create User instances with role "user"', () => {
      const regularUser = regularUserFactory.createUser('Peel Joe', 'peel_joe@epam.com');
      expect(regularUser).toBeInstanceOf(User);
      expect(regularUser.getRole()).toEqual('user');
    });
  
    test('AdminUserFactory should log a message for notifyUser() correctly', () => {
      const adminUser = adminUserFactory.createUser('Bruce Lee', 'bruce_lee@epam.com');
      console.log = jest.fn();
      adminUser.notifyUser('This is a test notification to admin');
      expect(console.log).toHaveBeenCalledWith('Sending message to admin: This is a test notification to admin');
    });
  
    test('RegularUserFactory should log a message for notifyUser() correctly', () => {
      const regularUser = regularUserFactory.createUser('Peel Joe', 'peel_joe@epam.com');
      console.log = jest.fn();
      regularUser.notifyUser('This is a test notification to user');
      expect(console.log).toHaveBeenCalledWith('Sending message to user: This is a test notification to user');
    });
  });