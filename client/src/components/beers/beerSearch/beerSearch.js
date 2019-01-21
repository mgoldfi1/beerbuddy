import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class BeerSearch extends Component {
  render() {
    return (
      <Grid>
          <Cell className="beersearch-header" col={12}>
          <h1>Search Beers</h1>
          </Cell>
      </Grid>
    )
  }
}
