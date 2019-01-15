import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import HorizontalScroll from 'react-scroll-horizontal'

class BreweryBeers extends Component {

  mapBeers = () => {
    return this.props.beers.map(beer => {
         return(
           <Link
            to={"/beer/" + beer.id}>
            <img className="brewery-beers" src={beer.label}/>
           </Link>
       )
    })
  }

render(){
    return (
        <>
        <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
        <div style={{height: '300px'}}>
        <HorizontalScroll>
          {this.mapBeers()}
          </HorizontalScroll>
        </div>
        </>
    )
  }
};

BreweryBeers.propTypes = {
  beers: PropTypes.array.isRequired
}

    // <div style={{display: "inline"}}>

export default BreweryBeers
