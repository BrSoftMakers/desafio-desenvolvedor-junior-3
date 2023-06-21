const { Posts } = require('../models');

const createPost = async (title, content, userId) => {
    try {
        const post = await Posts.create({ title, content, userId });
        return post;
    } catch (error) {
        throw new Error('Failed to create post');
    }
};

const getPosts = async () => {
    try {
        const posts = await Posts.findAll();
        return posts;
    } catch (error) {
        throw new Error('Failed to retrieve posts');
    }
};

const getPostById = async (id) => {
    try {
        const post = await Posts.findByPk(id);

        if (!post) {
            throw new Error('Post not found');
        }

        return post;
    } catch (error) {
        console.log('oi');
        throw new Error('Failed to retrieve post');
    }
};
const updatePost = async (id, title, content) => {
    try {
        const post = await Posts.findByPk(id);

        if (!post) {
            throw new Error('Post not found');
        }

        await post.update({
            title,
            content,
            updated: new Date(),
        });
        console.log('ola');
        return post;
    } catch (error) {
        throw new Error('Failed to update post');
    }
};

const deletePost = async (id) => {
    try {
        const post = await Posts.findByPk(id);

        if (!post) {
            throw new Error('Post not found');
        }

        await post.destroy();
    } catch (error) {
        throw new Error('Failed to delete post');
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
};
