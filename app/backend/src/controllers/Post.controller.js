const PostService = require('../services/Post.service');

const PostController = {
  insert: async (req, res) => {
    const post = await PostService.insert(req.body);
    return res.status(201).json(post);
  },

};

module.exports = PostController;
