import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class BeerContainer extends Component {

constructor(props) {
    super(props);
    this.state = {
        beers: [],
        value: true
    }
}
handleChange = event => {
    this.setState({ value: event.target.value });
  };

componentWillMount() {
    fetch('/api/beer')
    .then(res => res.json())
    .then(json => this.setState({beers: json.beer}))
}

render() {
    return (
        <div>
         <FormControl component="fieldset">
            <FormLabel  component="legend"><strong>Sort By:</strong></FormLabel>
            <RadioGroup
            aria-label="position"
            name="position"
            value={this.state.value}
            onChange={this.handleChange}
            row
            >
           <FormControlLabel
            value="bottom1"
            control={<Radio color="primary" />}
            label="ABV"
            labelPlacement="bottom"
            style={{margin: '1px'}}
            />

          <FormControlLabel
            value="bottom2"
            control={<Radio color="primary" />}
            label="Style"
            labelPlacement="bottom"
            style={{margin: '1px'}}
          />

            <FormControlLabel
            value="bottom3"
            control={<Radio color="primary" />}
            label="Brewery"
            labelPlacement="bottom"
            style={{margin: '1px'}}
          />
        </RadioGroup>
      </FormControl>
        <Grid>      
        {this.state.beers.map(
            beer => <Cell col={2}>
            <BeerCard name={beer.name} abv={beer.abv} style={beer.style} label={beer.label} brewery={beer.brewery.name}/></Cell>
        )}
        </Grid>
        </div>
    )
}


}