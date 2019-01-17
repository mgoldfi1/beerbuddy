const express = require('express');
const models = require('../../../models/')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../../../models/user')
const passport = require('passport')

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
            console.log(err)
            res.status(500).send({err: err})
        }
    } 
    )


    // Authentication

    isAuthenticated = (req, res, next) => {
        console.log(req.isAuthenticated())
        if (req.isAuthenticated()) return next()
        return res.send("Forbidden Acess")
    }

    //Login Route
   
    router.post('/login', passport.authenticate("local"), (req, res) => {
        res.send(req.user)
    })

    router.post('/dashboard', isAuthenticated, passport.authenticate("local"), (req, res) => {
        res.send("DASHBOARD")
    })

    //Facebook Login

    router.post('/facebook/login', (req, res) => {
        console.log(req.body)
    })

    return router;

};

