import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HorizontalScroll from 'react-scroll-horizontal'
import MapBeers from './mapBeers'
import ScrollerArrows from './scrollerArrows'
import AutoScroller from '../../autoScroller/autoScroller'

class BreweryBeers extends Component {



render(){
    return (
        <>
        <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
        <div className="scroller-container">
          <AutoScroller>
            <MapBeers beers={this.props.beers}/>
          </AutoScroller>
        </div>
        </>
    )
  }
};

BreweryBeers.propTypes = {
  beers: PropTypes.array.isRequired
}

    // <div style={{display: "inline"}}>
    // <ScrollerArrows visibility={this.state.visibility} activate={this.state.activate}/>

export default BreweryBeers
