const Sequelize = require("sequelize");
const connection = require("../db");

const Post = connection.define("posts", {
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },body:{
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Post.sync({force: false}) 

module.exports = Post;