const PostService = require('../../../services/Post.service');

module.exports = async function postExistenceCheck(req, _res, next) {
  const post = await PostService.findByPk(req.params);
  if (post.message) return next(new Error(post.message));

  const { id } = req.permission;
  if (id !== post.userId) return next(new Error('unauthorizedUser'));

  next();
};
