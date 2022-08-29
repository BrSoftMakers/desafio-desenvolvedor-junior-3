const { Users, BlogPosts } = require('../database/models');
const config = require('../database/config/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.development);

const userModel = { model: Users, as: 'user', attributes: { exclude: ['password'] }};

const PostService = {
  async inserPost(title, content, userId) {
    const transaction = await sequelize.transaction(async (t) => {
      await BlogPosts.create({
        userId, title, content,
      }, { transaction: t });
    });
    return transaction;
  },

  async findId(id) {
    const ident = await BlogPosts.findByPk(id);

    if (!ident) {
      return false;
    }
    return ident;
  },

  async updatePost(id, body) {
    const update = await BlogPosts.update(body, {
      where: { id }
    });
    return update;
  },

  async listPost() {
    const post = await BlogPosts.findAll({
      include: [userModel],
    });
    return post;
  },

  async listPostId(id) {
    const post = await BlogPosts.findOne({ 
      where: { id },
      include: [userModel],
    });
    return post;
  },

  async deletePost(id) {
    const deletedPost = await BlogPosts.destroy({ where: { id } });
    return deletedPost;
  }
}

module.exports = PostService;