const db = require('./db/db');
const User = require('./User')
const Post = db.sequelize.define('posts', {
    title: {
        type: db.reqSequelize.STRING,
        allowNull: false,
        required: true
    },
    content: {
        type: db.reqSequelize.TEXT,
        allowNull: false,
        required: true
    },
})


Post.belongsTo(User)

module.exports = Post