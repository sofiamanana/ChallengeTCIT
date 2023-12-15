const express = require('express');

const postRouter = require('./post.router');

function routerAPI(app) {
    const router = express.Router();
    app.use('/api/', router);
    router.use('/posts', postRouter);
};

module.exports = routerAPI;