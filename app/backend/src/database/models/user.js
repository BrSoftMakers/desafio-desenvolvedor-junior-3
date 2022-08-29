module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
    },
    {
      timestamps: false,
      tableName: 'Users',
    });

    Users.associate = (models) => {
      Users.hasMany(models.BlogPosts,
        { foreignKey: 'userId', as: 'user' });
    }
  return Users;
}