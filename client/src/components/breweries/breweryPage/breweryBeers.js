import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import HorizontalScroll from 'react-scroll-horizontal'

class BreweryBeers extends Component {

  state = {
    center: 0,
    offset: 0,
    scroller: 0
  }

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
    return this.props.beers.map((beer, index) => {
         return(
           <Link
            key={index}
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
    let linkWidth = event.currentTarget.children[0].children[0].children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    let scroller = event.currentTarget.children[0]
    this.interval = setInterval(() => scroller.scrollBy(this.state.scroller,0), 50)
    if (this.state.divWidth !== divWidth) {
      this.setState({center: (divWidth/2), offset: linkWidth})
    } else {

    }
    // scroller.scrollBy(10, 0)
  }

  handleMouseLeave = () => {
    clearInterval(this.interval)
  }

  handleMouseMove = (event) => {
  //   let coord = event.clientX
  //   let centerRange = [this.state.center - this.state.offset, this.state.center + this.state.offset]
  //   // console.log(centerRange, coord)
  //   if (coord <= centerRange[0]){
  //       event.currentTarget.children[0].scrollBy(-10, 0)
  //   } else if (coord >= centerRange[1]) {
  //       event.currentTarget.children[0].scrollBy(10, 0)
  //   } else {
  //     console.log('centered')
  //   }
  }

render(){
  console.log(this.state)
    return (
        <>
        <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
        <div style={{height: '300px'}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove}
        >
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
