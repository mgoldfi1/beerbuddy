const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.beeradvocate.com/beer/styles/32/?sort=revsD&start='
const defaultUrl = 'https://www.beeradvocate.com'
const axios = require('axios')
const models = require('../server/models')
const Beer = require('../server/models/beer')
const Brewery = require('../server/models/brewery')

function scrapeBeers() {
    axios.get('https://api.brewerydb.com/v2/beers/?key=6874f07b7858b637eaefd5cc5f5f1de6&hasLabels=Y&withBreweries=Y')
    .then(res => {
        for (const beer of res.data.data) {
                models.Brewery.findOrCreate({
                    where: {name: beer.breweries[0].name}, defaults: {
                    description: beer.breweries[0].description,
                    website: beer.breweries[0].website,
                    year: beer.breweries[0].established,
                    latitude: beer.breweries[0].locations[0].latitude,
                    longitude: beer.breweries[0].locations[0].longitude
                    }
                })
            .spread((brewery,created) => {
                models.Beer.create({
                    name: beer.name,
                    abv: parseFloat(beer.abv),
                    ibu: parseFloat(beer.ibu),
                    desc: beer.description,
                    label: beer.labels.large,
                    breweryId: brewery.id
                })


            } )
               
            
        }
    }
)
}

scrapeBeers()

