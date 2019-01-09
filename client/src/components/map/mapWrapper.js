import React, { Component } from 'react';
import MapContainer from './mapContainer'

class MapWrapper extends Component {

  state = {
    breweries: []
  }

  fetchBreweries = () => {
    fetch('/api/breweries')
    .then(res => res.json())
    .then(json => this.setState({breweries: json.breweries}))
  }

  componentWillMount(){
    this.fetchBreweries()
  }



    render() {
        return (
            <>
              <MapContainer/>
            </>
        )
    }
}

export default MapWrapper
