import React, { Component } from 'react';
import Beer from './beer'
import fetchApiData from '../HOC/fetchApiData'

class BeerWrapper extends Component {

  render(){

    const BeerWithFetch = fetchApiData(Beer, `beer/${this.props.match.params.id}`)

    return(
      <div>
      <BeerWithFetch/>
      </div>
    )
  }
}

export default BeerWrapper
