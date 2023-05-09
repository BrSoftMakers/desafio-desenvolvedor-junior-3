const db = require('./db/db');
const Post = require('./Post');

const Category = db.sequelize.define('categories', {
    name: {
        type: db.reqSequelize.STRING,
        allowNull: false,
        required: true
    }
})

Category.hasMany(Post)

module.exports = Category;