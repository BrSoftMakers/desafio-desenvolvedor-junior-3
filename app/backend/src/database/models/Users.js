const UserModel = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },

    },
    {
      timestamps: false,
      tableName: 'users',
    }
  );

  Users.associate = ({ Posts }) => {
    Users.hasMany(Posts, { foreignKey: 'userId', as: 'user'  });
  };

  return Users;
};

module.exports = UserModel;