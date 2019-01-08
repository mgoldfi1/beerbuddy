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
      .then(beers => res.send({beers}))
    });

      router.get('/:id', async(req, res, next) => {
        const beer = await models.Beer.find({where: {id: req.params.id}, include: [{
          model: models.Brewery,
          as: 'brewery'
          }]
        })
        res.send(beer)
      });

    return router;
};
