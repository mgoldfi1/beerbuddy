const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.beeradvocate.com/beer/styles/32/?sort=revsD&start='
const defaultUrl = 'https://www.beeradvocate.com'
const axios = require('axios')
const models = require('../models')
const Beer = require('../models/beer')
const Brewery = require('../models/brewery')

function scrapeBeers() {
    axios.get('https://api.brewerydb.com/v2/beers/?key=6874f07b7858b637eaefd5cc5f5f1de6&hasLabels=Y&withBreweries=Y')
    .then(res => {
        for (const beer of res.data.data) {
          debugger;
                 models.Brewery.findOrCreate({
                    where: {name: beer.breweries[0].name}, defaults: {
                    description: beer.breweries[0].description,
                    openToPublic: beer.breweries[0].locations[0].openToPublic,
                    country: beer.breweries[0].locations[0].country.name,
                    region: beer.breweries[0].locations[0].region,
                    website: beer.breweries[0].website,
                    year: beer.breweries[0].established,
                    latitude: beer.breweries[0].locations[0].latitude,
                    longitude: beer.breweries[0].locations[0].longitude,
                    logo: beer.breweries[0].images ? beer.breweries[0].images.squareLarge : null
                    }
                })
            .spread((brewery,created) => {
                models.Style.findOrCreate({
                    where: {name: beer.style.name}
                })
                models.Beer.create({
                    name: beer.name,
                    abv: parseFloat(beer.abv),
                    ibu: parseFloat(beer.ibu),
                    desc: beer.description,
                    label: beer.labels.large,
                    style: beer.style.name,
                    BreweryId: brewery.id
                })

            } )


        }
    }
)
}

scrapeBeers()
