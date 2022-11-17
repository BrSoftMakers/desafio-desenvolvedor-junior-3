/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypeS} DataTypes
 * @returns
 */
const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
      defaultScope: {
        attributes: {
          exclude: ['password'],
        },
      },
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Post, { foreignKey: 'userId', as: 'user' });
  };

  return User;
};

module.exports = User;
