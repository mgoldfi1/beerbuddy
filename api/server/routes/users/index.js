const express = require('express');
const models = require('../../../models/')
const router = express.Router();
const bcrypt = require('bcrypt')


module.exports = () => {
    router.post('/registration', async (req, res, next) => { 
        try {
        if (req.body.password !== req.body.passwordConfirmation) {
            throw new Error("Passwords do not match.")
        } else {
            const user = await models.User.create({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10)
            }
        )
         res.status(200).send({user: user})
        }
        }
        catch(err) {
            res.status(500).send({err: err})
        }
    } 
    )



    return router;

};

