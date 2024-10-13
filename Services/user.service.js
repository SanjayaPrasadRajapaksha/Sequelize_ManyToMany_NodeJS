import userRepository from '../Repositories/user.repository.js';

const userService = {
  async createUser(userData) {
    return await userRepository.createUser(userData);
  },

  async getUserById(userId) {
    return await userRepository.findUserById(userId);
  },

  async getAllUsers() {
    return await userRepository.findAllUsers();
  },

  async updateUser(userId, userData) {
    return await userRepository.updateUser(userId, userData);
  },

  async deleteUser(userId) {
    return await userRepository.deleteUser(userId);
  }
};

export default userService;
