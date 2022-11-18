const { Post } = require('../database/models');

const PostService = {
  insert: async (newPost) => {
    const post = await Post.create(newPost);
    return post;
  },

  findAll: async () => {
    const posts = await Post.findAll();
    return posts;
  },

  findByUser: async ({ userId }) => {
    const posts = await Post.findAll({ where: { userId } });
    if (!posts.length) return { message: 'thereAreNoPostsByThisUser' };
    return posts;
  },

  findByPk: async ({ id }) => {
    const post = await Post.findByPk(id);
    if (!post) return { message: 'postNotFound' };
    return post;
  },
};

module.exports = PostService;
