const { Model, DataTypes } = require('sequelize');

const POST_TABLE = 'posts';

class Post extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: POST_TABLE,
            modelName: 'Post',
            timestamp: true
        }
    }
};

const PostSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'description'
    }
};

module.exports = { Post, PostSchema };