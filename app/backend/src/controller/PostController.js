const PostService = require('../services/PostService');

const PostController = {
  async insertPost(req, res) {
    try {
      const { title, content } = req.body;
      await PostService.inserPost(title, content, req.userId);
      return res.status(201).json({ message: 'Created Post' });
    } catch (err) {
      return res.status(400).json({ message: 'erro' });
    }
  },

  async updatePost(req, res) {
    const { id } = req.params;
    const body = req.body;
    await PostService.updatePost(id, body);
    return res.status(200).json({ message: 'Updated Post' });
  },

  async listPost(req, res) {
    const posts = await PostService.listPost();
    if (!posts) {
      return res.status(400).json({ message: "Post(s) not found" });
    }
    res.status(200).json({ posts });
  },

  async listPostId(req, res) {
    const { id } = req.params;
    const post = await PostService.listPostId(id);
    if (!post) {
      return res.status(400).json({ message: "Post not found" });
    }
    res.status(200).json({ post });
  },

  async deletePost(req, res) {
    const { id } = req.params;
    await PostService.deletePost(id);
    res.status(200).json({ message: "Post has been deleted" });
  }
}

module.exports = PostController;