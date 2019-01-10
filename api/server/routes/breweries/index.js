const express = require('express');
const models = require('../../../models/')

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
      models.Brewery.findAll({})
      .then(breweries => res.send({breweries}))
    })

    router.get('/:id', (req, res, next) => {
      res.send({message: "hello"})
    })
    return router;

};
