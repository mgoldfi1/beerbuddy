import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HorizontalScroll from 'react-scroll-horizontal'
import MapBeers from './mapBeers'
import AutoScroller from 'react-auto-scroller';

class BreweryBeers extends Component {

render(){
    return (
        <React.Fragment>
        <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
          <AutoScroller>
            <MapBeers beers={this.props.beers}/>
          </AutoScroller>
        </React.Fragment>
    )
  }
};

export default BreweryBeers
