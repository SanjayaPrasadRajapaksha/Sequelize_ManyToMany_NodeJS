import userService from '../Services/user.service.js';

const userController = {
  async createUser(req, res) {
    const user = await userService.createUser(req.body);
    res.json(user);
  },

  async getUserById(req, res) {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  },

  async getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
  },

  async updateUser(req, res) {
    await userService.updateUser(req.params.id, req.body);
    res.json({ message: 'User updated successfully' });
  },

  async deleteUser(req, res) {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted successfully' });
  }
};

export default userController;
