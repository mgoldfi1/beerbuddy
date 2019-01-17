import React from 'react';
import BreweryBeerLink from './breweryBeerLink'

const MapBeers = ({beers}) => {

    return (
      beers.map((beer, index) => {
           return(
             <BreweryBeerLink {...beer} index={index}/>
         )
      })
    )
}

export default MapBeers
