import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom'
import BeerSorter from './beerSorter/beerSorter'

class BeerContainer extends Component {

  state = {
          beers: [],
          value: "abv",
          page: 0,
          more: true
      }


  loadFunc = (page) => {
    fetch(`/api/beer/${this.state.value}/${this.state.page}`)
      .then(res => res.json())
      .then(json => {
        if (json.beers.length > 0) {
          this.setState(currentState => ({beers: [...currentState.beers, ...json.beers], page: currentState.page + 1}) )
        }
    })
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

  mapBeers = () => {
    return this.state.beers.map(beer => <BeerCard beer={beer}/>)
  }

  render() {
    console.log(this.state.beers)
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
                {this.mapBeers()}
              </Grid>
          </InfiniteScroll>
        </div>
      )
  }
}

export default BeerContainer
