const express = require('express');
const cors    = require('cors');

const api  = require('./router');

const app = express();

app
    .use(cors())
    .use('/api', api)
    .use((err, req, res, next) => {
        // console.log(err);
        if(err.name == "CustomError") {
            res.status(err.statusCode || 200);
            
            if(err) {
                res.json({
                    error: true,
                    code: err.statusCode || 500,
                    message: err.message
                });
            }
            
        }
        next();
    })
    .listen(3030);