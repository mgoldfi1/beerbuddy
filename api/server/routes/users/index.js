const express = require('express');
const models = require('../../../models/')
const router = express.Router();
const bcrypt = require('bcrypt')


module.exports = () => {
    router.post('/registration', async (req, res, next) => {
        try {
            if (req.body.password !== req.body.passwordConfirmation) {
                throw new Error ("Passwords do not match.")
            }
        }
        catch(e){next(e)}
    })



    return router;

};
