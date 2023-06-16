const Posts = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Posts',
        {
            id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            published: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW, // Define a data atual como valor padrão
            },
            updated: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW, // Define a data atual como valor padrão
            },
            userId: {
                type: DataTypes.INTEGER,
                foreignKey: true,
            },
        },
        { timestamps: false },
    );

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    };

    return Post;
};

module.exports = Posts;
