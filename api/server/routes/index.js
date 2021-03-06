const express = require('express');
const router = express.Router();
const breweriesRoute = require('./breweries');
const beerRoute = require('./beer');
const usersRoute = require('./users')
const stylesRoute = require('./styles')



module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('index');
    });

    router.use('/breweries', breweriesRoute());
    router.use('/beer', beerRoute());
    router.use('/users', usersRoute());
    router.use('/styles', stylesRoute());

    return router;
};
