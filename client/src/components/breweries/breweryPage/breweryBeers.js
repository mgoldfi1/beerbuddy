import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HorizontalScroll from 'react-scroll-horizontal'
import MapBeers from './mapBeers'
import AutoScroller from '../../autoScroller/autoScroller'

class BreweryBeers extends Component {

render(){
    return (
        <>
        <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
          <AutoScroller>
            <MapBeers beers={this.props.beers}/>
          </AutoScroller>
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
