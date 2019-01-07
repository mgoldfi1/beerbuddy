const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('./models')
const Beer = require('./models/beer')
const Brewery = require('./models/brewery')
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/api/beer/:filter/:page', (req, res) => {
  models.Beer.findAll({
  limit: 10,
  offset: req.params.page*10,
  include: [{
    model: models.Brewery,
    as: 'brewery'
    }],
  order: [
    req.params.filter
  ]
})
  .then(beer => res.send({beer}))
}
)

app.get('/api/breweries',  (req, res) => {
  models.Brewery.findAll({})
  .then(breweries => res.send({breweries}))
})
;

module.exports = app;
