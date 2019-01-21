const models = require('../../../models/')
const express = require('express');
const router = express.Router();



module.exports = () => {
    router.get('/all', async (req, res, next) => {
      const styles = await models.Style.findAll({})
      const breweries = await models.Brewery.findAll({})
      res.status(200).send({styles,breweries})
    })

 
    return router;

};