import db from '../Models/index.js';

const userRepository = {
  async createUser(userData) {
    return await db.User.create(userData);
  },

  async findUserById(userId) {
    return await db.User.findOne({ where: { id: userId } });
  },

  async findAllUsers() {
    return await db.User.findAll();
  },

  async updateUser(userId, userData) {
    return await db.User.update(userData, { where: { id: userId } });
  },

  async deleteUser(userId) {
    return await db.User.destroy({ where: { id: userId } });
  }
};

export default userRepository;