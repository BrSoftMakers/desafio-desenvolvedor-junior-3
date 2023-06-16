const PostService = require('../services/post.service');

const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        const post = await PostService.createPost(title, content, userId);

        return res.status(201).json({ post });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create post' });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await PostService.getPosts();

        return res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve posts' });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await PostService.getPostById(id);

        return res.status(200).json({ post });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to retrieve post' });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const updatedPost = await PostService.updatePost(id, title, content);

        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        return res.status(200).json({ post: updatedPost });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update post' });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        await PostService.deletePost(id);

        return res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete post' });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
};
