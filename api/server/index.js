const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('../models')
const Beer = require('../models/beer')
const Brewery = require('../models/brewery')
const app = express();
const session = require('express-session');
const passport = require('passport')

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Passport Middleware 
app.use(passport.initialize());
app.use(passport.session());

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
