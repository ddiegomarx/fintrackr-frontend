import IUserRepository from "./IUserRepository";

// Implementação mock do repositório de usuário
export default class MockUserRepository extends IUserRepository {
  constructor() {
    super();
    this.users = [
      { id: 1, username: "mockuser1", email: "mockuser1@example.com" },
      // Mais usuários mock
    ];
  }

  async createUser(userData) {
    const newUser = { id: Date.now(), ...userData };
    this.users.push(newUser);
    return newUser;
  }

  async getUsers() {
    return this.users;
  }

  async getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  async updateUser(id, userData) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
      return this.users[userIndex];
    }
    throw new Error("User not found.");
  }

  async deleteUser(id) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users = this.users.filter((user) => user.id !== id);
      return { id };
    }
    throw new Error("User not found.");
  }
}
