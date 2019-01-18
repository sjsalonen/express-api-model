const express = require('express');
const bodyParser = require("body-parser"); 
const languageRoutes = require("./api/routes/languages");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.use(bodyParser.json({limit: '50mb'}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Headers", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/api/languages', languageRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;