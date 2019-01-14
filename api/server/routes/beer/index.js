const express = require('express');
const models = require('../../../models/')

const router = express.Router();

module.exports = () => {
    router.get('/:filter/:page', async (req, res, next) => {
        try {
          let beers = await models.Beer.findAll({
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
        if (beers.length > 0) {
          res.send({beers})
        } else {
          throw new Error
        }
      } catch (err) {
        console.log(err.message)
        res.status(404).send(err)
      }
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
