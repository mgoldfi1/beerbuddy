const express = require('express');
const models = require('../../../models/')

const router = express.Router();

module.exports = () => {
    router.get('/filter/:filter', async (req, res, next) => {
        try {
          let beers = await models.Beer.findAll({
            limit: 10,
            offset: req.query.page*10,
            include: [{
              model: models.Brewery,
              as: 'brewery'
              }],
            order: [
              [req.params.filter, req.query.order]
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


      router.post('/rating', async(req, res, next) => {
        console.log(req.body)
        const rating = await models.BeerRatings.findOne({where: {beerId: req.body.beerId, userId: req.body.userId}})
        if (rating) {
          res.status(500).send({err: "Already Rated."})
        }
        else {
         const value = req.body.value
         const beerRating = await models.BeerRatings.create({userId: req.body.userId, beerId: req.body.beerId})
         const beer = await models.Beer.findOne({where: {id: req.body.beerId}})
         models.Beer.update({ratingAvg: (((beer.ratingAvg*beer.ratingCount) + (value))/(beer.ratingCount + 1)), ratingCount: (beer.ratingCount + 1)}, {where: {id: beer.id}})
         res.status(200).send({message: "Your rating has been logged."})
        }
      })

      router.post('/favorite', async(req, res, next) => {
        console.log(req.body)
        const favorite = await models.BeerFavorites.findOne({where: {beerId: req.body.beerId, userId: req.body.userId}})
        if (favorite) {
          res.status(500).send({err: "This beer is already in your favorites."})
        } else {
          const favorite = await models.BeerFavorites.create({beerId: req.body.beerId, userId: req.body.userId})
          res.status(200).send({message: "Added to favorites."})
        }
      })

    return router;
};
