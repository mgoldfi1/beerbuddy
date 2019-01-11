const express = require('express');
const models = require('../../../models/')

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
      models.Brewery.findAll({})
      .then(breweries => res.send({breweries}))
    })

    router.get('/:id',  async (req, res, next) => {
      brewery = await models.Brewery.findOne({ where: {id: req.params.id}, include: [{
        model: models.Beer
        }]})
      res.send(brewery)
    })
    return router;

};
