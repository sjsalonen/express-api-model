const express = require('express');
const data = require('../../data/languages.json');
const languageService = require('../../services/languageService');

const router = express.Router();

router.get('/', (req, res, next) => {

    try {
        res.status(200).json(data);
    } catch(e) {
        console.log(e);
        const error = new Error("Unknown error");
        error.status = 500;
        next(error);
    }

});

router.get('/id/:id', (req, res, next) => {

    const id = req.params.id;

    try {
        const language = languageService.findFromArrayByProperty(data, id, 'id');
        if (!language) {
            const error = new Error("Not found");
            error.status = 404;
            next(error);
        }
        res.status(200).json(language);
    } catch(e) {
        console.log(e);
        const error = new Error("Unknown error");
        error.status = 500;
        next(error);
    }

});

router.get('/name', (req, res, next) => {

    const name = req.query.name;

    if (!name) {
        const error = new Error("Bad request");
        error.status = 400;
        next(error);
    }

    try {
        const language = languageService.findFromArrayByProperty(data, name, 'name');
        if (!language) {
            const error = new Error("Not found");
            error.status = 404;
            next(error);
        }
        res.status(200).json(language);
    } catch(e) {
        console.log(e);
        const error = new Error("Unknown error");
        error.status = 500;
        next(error);
    }

});

router.post('/sorted', (req, res, next) => {

    const params = req.body;

    if (!params.sortBy || !params.order) {
        const error = new Error("Bad request");
        error.status = 400;
        next(error);
    }

    try {
        const languages = languageService.sortArray(data, params);
        res.status(200).json(languages);
    } catch(e) {
        console.log(e);
        const error = new Error("Unknown error");
        error.status = 500;
        next(error);
    }

});

module.exports = router;