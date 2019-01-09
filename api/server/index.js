const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('../models')
const Beer = require('../models/beer')
const Brewery = require('../models/brewery')
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
