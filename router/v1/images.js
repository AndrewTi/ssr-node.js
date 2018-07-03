const router = require('express').Router();
const { uploadById } = require('../../controller/images');

router
    .get('/upload/:id', uploadById);

module.exports = router;

