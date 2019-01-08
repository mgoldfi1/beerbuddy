import React, { Component } from 'react';
import BreweryList from './breweryList'


class BreweriesContainer extends Component {

    render() {
        return (
            <div>
              <strong>Click on a brewery below to visit its page:</strong>
              <Grid className="list">
              {this.props.breweries.map(
                  (brewery,i) => {
                      return (
                      <Cell key={i} col={2}>
                      <div className="breweryCell"><a href="#">{brewery.name}</a></div>
                      </Cell>
                      )
                  }
              )}
              </Grid>
            </div>
        )
    }
}

export default BreweriesContainer
