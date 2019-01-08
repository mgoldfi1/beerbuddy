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

// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     const status = err.status || 500;
//     res.locals.status = status;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     res.status(status);
//     return res.render('error');
// });

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!'); 
})

app.listen(3001);

module.export = app;
