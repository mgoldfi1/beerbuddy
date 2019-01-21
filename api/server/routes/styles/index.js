const models = require('../../../models/')
const express = require('express');
const router = express.Router();



module.exports = () => {
    router.get('/all', (req, res, next) => {
      models.Style.findAll({})
      .then(styles => res.send({styles}))
    })

 
    return router;

};