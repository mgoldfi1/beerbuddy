const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('../models')
const Beer = require('../models/beer')
const Brewery = require('../models/brewery')
const app = express();
const session = require('express-session');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')



app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null,user.id)
})
passport.deserializeUser((user, done) => {
  done(null,user)
})

passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
   async (email, password, done) => {
    
    const user = await models.User.findOne({ where: {email: email}})
    if (user) {
        const match =  await bcrypt.compare(password, user.password)
        console.log(match)
        if (!match) return done(null,false)
        return done(null,user)
    }

      return done(null, false);
  }
));







const routes = require('./routes');
app.use(express.static('public'));
// app.get('/favicon.ico', (req, res, next) => {
//     return res.sendStatus(204);
// });


app.use('/api', routes());

// app.use((req, res, next) => {
//     return next(createError(404, 'File not found'));
// });





app.listen(3001);

module.export = app;
