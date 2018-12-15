import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InfiniteScroll from 'react-infinite-scroller';

export default class BeerContainer extends Component {

constructor(props) {
    super(props);
    this.state = {
        beers: [],
        value: "abv",
        more: true 
    }
}

loadFunc = (page) => {
  if (page < 6) {
  fetch(`/api/beer/` + page)
    .then(res => res.json())
    .then(json => this.setState({beers: [...this.state.beers, ...json.beer]}))
  } else {
     this.setState({more: false})
  }
}

handleChange = event => {
    this.setState({ value: event.target.value });
  };

// componentWillMount() {
//     fetch('/api/beer')
//     .then(res => res.json())
//     .then(json => this.setState({beers: json.beer}))
// }

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
            value="abv"
            control={<Radio color="primary" />}
            label="ABV"
            labelPlacement="bottom"
            style={{margin: '1px'}}
            />

            <FormControlLabel
            value="rating"
            control={<Radio color="primary" />}
            label="Rating"
            labelPlacement="bottom"
            style={{margin: '1px'}}
            />

          <FormControlLabel
            value="style"
            control={<Radio color="primary" />}
            label="Style"
            labelPlacement="bottom"
            style={{margin: '1px'}}
          />

            <FormControlLabel
            value="brewery"
            control={<Radio color="primary" />}
            label="Brewery"
            labelPlacement="bottom"
            style={{margin: '1px'}}
          />
        </RadioGroup>
      </FormControl>
           
      
        <InfiniteScroll
            pageStart={-1}
            loadMore={this.loadFunc.bind(this)}
            hasMore={this.state.more}
            loader={<div className="loader" key={0}>Loading ...</div>}
            >
            <Grid>
               {this.state.beers.map(
            beer => <Cell col={2}>
            <BeerCard name={beer.name} abv={beer.abv} style={beer.style} label={beer.label} brewery={beer.brewery.name}/></Cell>
        )} 
            </Grid>
        </InfiniteScroll>
        
        </div>
    )
}


}