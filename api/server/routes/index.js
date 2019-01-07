const express = require('express');

const router = express.Router();

const breweriesRoute = require('./breweries');
const beerRoute = require('./beer');

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('index');
    });

    router.use('/breweries', breweriesRoute());
    router.use('/beer', beerRoute());

    return router;
};
