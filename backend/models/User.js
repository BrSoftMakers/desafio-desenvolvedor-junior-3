const db = require('./db/db');
const Post = require('./Post');

const User = db.sequelize.define('users', {
    name: {
        type: db.reqSequelize.STRING,
        required: true
    },
    email: {
        type: db.reqSequelize.STRING,
        required: true,
        unique: true
    },
    password: {
        type: db.reqSequelize.STRING,
        required: true,
    }
})

module.exports = User;