const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router
    .post('/', postController.create)
    .delete('/:id', postController._delete)
    .get('/:id', postController.getById)
    .get('/', postController.get)

module.exports = router;