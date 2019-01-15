import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BreweryBeers = ({beers}) => {
  const mapBeers = () => {
    return beers.map(beer => {
         return(
           <Link
            target="_blank"
            to={"/beer/" + beer.id}>
            <img className="brewery-beers" src={beer.label}/>
           </Link>
       )
    })
  }


  return (
      <>
      <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
        {mapBeers()}
      </>
  )
};

BreweryBeers.propTypes = {
  beers: PropTypes.array.isRequired
}

    // <div style={{display: "inline"}}>

export default BreweryBeers
