import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HorizontalScroll from 'react-scroll-horizontal'
import MapBeers from './mapBeers'
import ScrollerArrows from './scrollerArrows'

class BreweryBeers extends Component {

  state = {
    center: 0,
    offset: 0,
    scroller: 0,
    visibility: 'hidden',
    activate: ''
  }

  handleMouseEnter = (event) => {
    let linkWidth = event.currentTarget.children[0].children[0].children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    let scroller = event.currentTarget.children[0]
    this.interval = setInterval(() => scroller.scrollBy(this.state.scroller, 0, 'smooth'), 50)
    if (this.state.divWidth !== divWidth) {
      this.setState({center: (divWidth/2), offset: linkWidth, visibility: ''})
    } else {
      this.setState({visibility: ''})
    }
  }

  handleMouseLeave = () => {
    clearInterval(this.interval)
    this.setState({visibility: 'hidden'})
  }

  handleMouseMove = (event) => {
    let coord = event.clientX
    let centerRange = [this.state.center - this.state.offset, this.state.center + this.state.offset]
    if (coord <= centerRange[0]){
        this.setState({scroller: (coord - centerRange[0]) * 0.1, activate: 'left'})
    } else if (coord >= centerRange[1]) {
        this.setState({scroller: (coord - centerRange[1]) * 0.1, activate: 'right'})
    } else {
      this.setState({scroller: 0, activate: ''})
    }
  }

render(){
  console.log(this.state.visibility)
    return (
        <>
        <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
        <div className="scroller-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove}
        >
          <HorizontalScroll>
            <MapBeers beers={this.props.beers}/>
          </HorizontalScroll>
        </div>
        <ScrollerArrows visibility={this.state.visibility} activate={this.state.activate}/>
        </>
    )
  }
};

BreweryBeers.propTypes = {
  beers: PropTypes.array.isRequired
}

    // <div style={{display: "inline"}}>

export default BreweryBeers
