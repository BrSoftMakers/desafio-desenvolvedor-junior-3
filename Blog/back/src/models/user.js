const User = (sequelize, DataTypes) => {
    // eslint-disable-next-line no-shadow
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            displayName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        { timestamps: false },
    );

    User.associate = (models) => {
        User.hasMany(models.Posts, { foreignKey: 'userId', as: 'posts' });
    };

    return User;
};

module.exports = User;
