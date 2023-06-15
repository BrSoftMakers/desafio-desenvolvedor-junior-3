const Posts = (sequelize, DataTypes) => {
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
    Posts.hasOne(models.User, {
      foreignKey: 'id',
      as: 'user',
    });
  };

  return Posts;
}

module.exports = Posts;
