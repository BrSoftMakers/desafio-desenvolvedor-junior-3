const PostService = require('../services/PostService');

const validPostFileds = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content ) {
    return res.status(400).json({ message: 'Some required fields' })
  }
  next();
}

const validId = async (req, res, next) => {
  const { id } = req.params;
  const valid = await PostService.findId(id);
  if (valid === false) {
    return res.status(400).json({ message: '"id" not found'});
  }
  next();
}

module.exports = {
  validPostFileds,
  validId,
};