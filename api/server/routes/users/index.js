const express = require('express');
const models = require('../../../models/')
const router = express.Router();
const bcrypt = require('bcrypt')


module.exports = () => {
    router.post('/registration', (req, res, next) => {
      console.log(req.body)
    })



    return router;

};
