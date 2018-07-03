const AppError = require('../lib/app-error');
const { readFileSync } = require('fs');

module.exports = {
    uploadById(req, res, next) {
        const { id } = req.params;

        if(id != 'work-24_1_tu4ujr')
            return next(new AppError(404));

        const image = readFileSync('./images/work-24_1_tu4ujr.jpeg');

        res.contentType('image/jpeg');
        res.send(image);
    }
}