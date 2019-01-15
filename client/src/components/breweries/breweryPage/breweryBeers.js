import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import HorizontalScroll from 'react-scroll-horizontal'

class BreweryBeers extends Component {

  // componentWillMount(){
  //   this.getWindowWidth();
  //   window.addEventListener('resize', this.getWindowWidth)
  // }
  //
  // componentWillUnmount(){
  //   window.removeEventListener('resize', this.getWindowWidth)
  // }
  //
  // getWindowWidth = () => {
  //   console.log(window.innerWidth)
  // }

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


  // when mouse enters div, check size of beer link and div container
  // if container width is not equal to the width stored in local state, setState to new width
  // beer link width will not change depending on the resizing of the window, only set state once
  
  handleMouseEnter = (event) => {
    let beerLinkWidth = event.currentTarget.children[0].children[0].children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    console.log(beerLinkWidth, divWidth)
    // console.log('Mouse Horizonal Position', event.clientX)
  }

render(){
    return (
        <>
        <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
        <div style={{height: '300px'}} onMouseEnter={this.handleMouseEnter}>
        <HorizontalScroll >
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
