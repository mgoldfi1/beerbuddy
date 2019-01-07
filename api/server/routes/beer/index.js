const express = require('express');
const models = require('../../../models/')

const router = express.Router();

module.exports = () => {
    router.get('/:filter/:page', (req, res, next) => {
      models.Beer.findAll({
      limit: 10,
      offset: req.params.page*10,
      include: [{
        model: models.Brewery,
        as: 'brewery'
        }],
      order: [
        req.params.filter
      ]
    })
      .then(beer => res.send({beer}))
    });

      router.get('/:id', async(req, res, next) => {
        const beer = await models.Beer.findById(req.params.id)
        res.send(beer)
      });

    return router;
};
