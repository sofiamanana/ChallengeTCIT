const { Post, PostSchema } = require('./post.model')

function setupModels(sequelize){
    Post.init(PostSchema, Post.config(sequelize));
}

module.exports = setupModels;