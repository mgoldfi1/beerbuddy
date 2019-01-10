const express = require('express');
const models = require('../../../models/')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../../../models/user')

module.exports = () => {
    router.post('/registration', async (req, res, next) => { 
        try {
        if (req.body.password !== req.body.passwordConfirmation) {
            throw new Error("Passwords do not match.")
        } else {
            const user = await User.create({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10)
            }
        )
         res.status(200).send({user: user})
        }
        }
        catch(err) {
            console.log(err)
            res.status(500).send({err: err})
        }
    } 
    )



    return router;

};

