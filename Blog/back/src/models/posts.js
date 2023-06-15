const PostsModel = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  Posts.associate = (models) => {
    Posts.hasOne(models.Users, {
      foreignKey: 'id',
      as: 'user',
    });
  };

  return Posts;
}