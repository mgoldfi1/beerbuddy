const express = require('express');
const models = require('../../../models/')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../../../models/user')
const passport = require('passport')
const axios = require('axios')

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

    router.post('/facebook/login', async (req, res) => {
        const user = await models.User.findOne({where: {email: req.body.email}})
        axios.get(`https://graph.facebook.com/debug_token?input_token=${req.body.accessToken}&access_token=552435025257967|T8Fi5uP5c06-BGnu30BTY8fqxAE`)
        .then( async response => {if (response.data.data.is_valid == true){
            models.User.update({password: req.body.accessToken}, {where: {id: user.id}})
            const updatedUser = await models.User.findOne({where: {email: req.body.email}})
            res.send({user: updatedUser})
        }})
    })

    return router;

};

