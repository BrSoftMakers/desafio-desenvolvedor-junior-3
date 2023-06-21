module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    edited: DataTypes.DATE,
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts',
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId', as: 'users'
    });
  }
  
  return Post;
};
