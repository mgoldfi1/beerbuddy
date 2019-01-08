import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom'
import BeerSorter from './beerSorter/beerSorter'

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
  fetch(`/api/beer/` + this.state.value + `/` + page)
    .then(res => res.json())
    .then(json => this.setState({beers: [...this.state.beers, ...json.beer]}))
  } else {
     this.setState({more: false})
  }
}

handleChange = (event) => {
    // let value = event.target.value
    // fetch(`/api/beers?value=${value}`)
    // .then()
    // .then(json => {
    //   this.setState({value: value, beers: json})
    // })
    this.setState({beers: [], value: event.target.value });
  };

// componentWillMount() {
//     fetch('/api/beer')
//     .then(res => res.json())
//     .then(json => this.setState({beers: json.beer}))
// }

render() {
    return (
        <div>
        <BeerSorter value={this.state.value} handleChange={this.handleChange}/>

        <InfiniteScroll
            pageStart={-1}
            loadMore={this.loadFunc}
            hasMore={this.state.more}
            loader={<div className="loader" key={0}>Loading ...</div>}
            >
            <Grid>
               {this.state.beers.map(
            beer => <Cell col={2}>
            <Link to={'/beer' + '/' + beer.id} ><BeerCard name={beer.name} abv={beer.abv} style={beer.style} label={beer.label} brewery={beer.brewery.name}/></Link></Cell>
        )}
            </Grid>
        </InfiniteScroll>

        </div>
    )
}


}
