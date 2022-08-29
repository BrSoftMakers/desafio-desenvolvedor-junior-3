const { Users } = require('../database/models');

const UserService = {
  async login(email, password) {
    const user = await Users.findOne({
      where: {
        email,
        password,
      },
    });
    return user;
  },

  async insertUser(email, password) {
    const user = await Users.create({
      email,
      password,
    });
    return user;
  },

  async exist(email) {
    const user = await Users.findOne({
      where: { email }
    });
    return user;
  }
}

module.exports = UserService;