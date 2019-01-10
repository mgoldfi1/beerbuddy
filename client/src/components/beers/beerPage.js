import React, { Component } from 'react';
import Beer from './beer';
import fetchApiData from '../HOC/fetchApiData';

class BeerPage extends Component {
  render() {
    const BeerWithFetch = fetchApiData(Beer, `beer/${this.props.match.params.id}`);
    return(
      <BeerWithFetch/>
    )
  }
}

export default BeerPage
