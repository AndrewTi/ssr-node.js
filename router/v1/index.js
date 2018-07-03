const router = require('express').Router();
const images = require('./images');

router
    .use('/images', images)

module.exports = router;