// Importe o repositório correto com base na necessidade do seu projeto
import userRepository from "../repositories/MockUserRepository";
// import userRepository from '../repositories/UserRepository'; // para a versão da API real

// O serviço que expõe métodos para operações CRUD de usuários
const userService = {
  async createUser(userData) {
    return userRepository.createUser(userData);
  },

  async getUsers() {
    return userRepository.getUsers();
  },

  async getUserById(id) {
    return userRepository.getUserById(id);
  },

  async updateUser(id, userData) {
    return userRepository.updateUser(id, userData);
  },

  async deleteUser(id) {
    return userRepository.deleteUser(id);
  },
};

export default userService;
