const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, { timestamps: false });
  
    User.associate = (models) => {
      User.hasMany(models.BlogPost,
        { foreignKey: 'userId', as: 'blogPosts' });
    };

    return User;
  };
  
module.exports = UserModel;
