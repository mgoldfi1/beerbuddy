import React, { Component } from 'react';
import BreweriesList from './breweriesList'
import { Grid } from 'react-mdl'



class BreweriesContainer extends Component {

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

  displayBreweries = () => {
    return this.state.breweries.length > 0 ? <BreweriesList breweries={this.state.breweries}/> : null
  }

    render() {
        return (
            <div>
              <strong>Click on a brewery below to visit its page:</strong>
              <Grid className="list">
              {this.displayBreweries()}
              </Grid>
            </div>
        )
    }
}

export default BreweriesContainer
