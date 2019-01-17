import React from 'react';
import { Link } from 'react-router-dom'

const MapBeers = ({beers}) => {

    return (
      beers.map((beer, index) => {
           return(
             <Link
              className='brewery-beer-links'
              key={index}
              to={"/beer/" + beer.id}>
              <img className="brewery-beers" src={beer.label}/>
             </Link>
         )
      })
    )
}

export default MapBeers
