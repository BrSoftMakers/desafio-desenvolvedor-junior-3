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

const getByUser = async (id) => {
  const posts = await Posts.findAll({
    where: { user_id: id },
    include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }],
  });

  if (!posts) return { type: 'INVALID_ID', message: 'Posts does not exist' };

  return posts;
};

const editPost = async (id, { title, content }) => {
  const updated = Date.now()
  const newPost = await Posts.update({
    title,
    content,
    updated,
  }, { where: { id } });
  return newPost;
};

const deletePost = async (id) => {
  await Posts.destroy({ where: { id } });
  return 'success';
};

module.exports = {
  getAll,
  deletePost,
  getById,
  newPost,
  editPost,
  getByUser
};