import React, { Component } from 'react';
import Beer from './beer'
import fetchData from '../HOC/fetchData'

class BeerWrapper extends Component {

  render(){

    const BeerWithFetchData = fetchData(Beer, `beer/${this.props.match.params.id}`)

    return(
      <div>
      <BeerWithFetchData/>
      </div>
    )
  }
}

export default BeerWrapper
