const { Post, User } = require('../database/models');

const PostService = {
  insert: async (newPost) => {
    const post = await Post.create(newPost);
    return post;
  },

  findAll: async () => {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['id', 'email', 'password'] },
        },
      ],
    });
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

  update: async ({ id }, postToUpdate) => {
    return Post.update({ ...postToUpdate }, { where: { id } }).then(
      ([fields]) => {
        switch (true) {
          case fields < 1:
            return { message: 'Nenhum campo precisou ser atualizado!' };
          case fields === 1:
            return { message: 'O post foi atualizado com sucesso!' };
        }
      }
    );
  },

  delete: async ({ id }) => {
    return Post.destroy({ where: { id } }).then(() => ({
      message: 'Post excluído com sucesso!',
    }));
  },
};

module.exports = PostService;
