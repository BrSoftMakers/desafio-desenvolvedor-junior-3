const { Posts, Users } = require('../../database/models');

const newPost = async ({ title, content, userId }) => {

  const published = Date.now()

  const newPost = await Posts.create({
    title,
    content,
    userId,
    published,
  });

  return newPost;
};

const getAll = async () => {
  const posts = await Posts.findAll({
    include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }],
  });

  return posts;
};

const getById = async (id) => {
  const post = await Posts.findByPk(id, {
    include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }]
  });

  if (!post) return { type: 'INVALID_ID', message: 'Post does not exist' };

  return post;
};

const deletePost = async (id) => {
  await Posts.destroy({ where: { id } });
  return 'success';
};

module.exports = {
  getAll,
  deletePost,
  getById,
  newPost
};