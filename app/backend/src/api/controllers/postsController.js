const postsService = require('../services/postsService');

const newPost = async (req, res) => {
  const { body } = req
  const newPost = await postsService.newPost(body);
  res.status(201).send(newPost);
};

const getAll = async (_req, res) => {
  const allPosts = await postsService.getAll();
  return res.status(200).send(allPosts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postsService.getById(id);
  if (post.type) return res.status(404).json({ message: post.message });
  res.status(200).json(post);
};

const getByUser = async (req, res) => {
  const { id } = req.params;
  const posts = await postsService.getByUser(id);
  if (posts.type) return res.status(404).json({ message: posts.message });
  res.status(200).json(posts);
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { body } = req
  const editedPost = await postsService.editPost(id, body);
  return res.status(204).send(editedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await postsService.deletePost(Number(id));
  return res.status(200).send('ok');
};

module.exports = {
  newPost,
  getAll,
  getById,
  deletePost,
  editPost,
  getByUser
};