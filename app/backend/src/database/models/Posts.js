module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    'Posts',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
      },

      title: DataTypes.STRING,

      content: DataTypes.STRING,

      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },

      published: DataTypes.DATE,

      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'posts',
      underscored: true,
    },
  );
    
  Posts.associate = ({ Users }) => {
    Posts.belongsTo(Users, { foreignKey: 'userId', as: 'user' })
  };

  return Posts;
};