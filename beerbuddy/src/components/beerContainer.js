import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
export default class BeerContainer extends Component {

constructor(props) {
    super(props);
    this.state = {
        beers: []
    }
}


componentWillMount() {
    fetch('/api/beer')
    .then(res => res.json())
    .then(json => this.setState({beers: json.beer}))
}

render() {
    return (
        <div>
        <Grid>
        {this.state.beers.map(
            beer => <Cell col={3}>
            <BeerCard name={beer.name} abv={beer.abv} style={beer.style} label={beer.label} brewery={beer.brewery.name}/></Cell>
        )}
        </Grid>
        </div>
    )
}


}