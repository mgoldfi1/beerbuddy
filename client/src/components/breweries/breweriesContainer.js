import React, { Component } from 'react';
import BreweriesList from './breweriesList'
import { Grid } from 'react-mdl'

class BreweriesContainer extends Component {

    render() {
        return (
            <>
              <strong>Click on a brewery below to visit its page:</strong>
              <Grid className="list">
              <BreweriesList breweries={this.props.breweries}/>
              </Grid>
            </>
        )
    }
}

export default BreweriesContainer
