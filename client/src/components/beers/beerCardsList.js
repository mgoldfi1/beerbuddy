import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom'
import BeerSorter from './beerSorter/beerSorter'
import { FiLoader } from "react-icons/fi";

class BeerCardsList extends Component {

  state = {
          beers: [],
          value: "abv",
          page: 0,
          more: true,
          error: null
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
      this.setState({beers: [], value: event.target.value, page: 0 });
    };

  mapBeers = () => {
    return this.state.beers.map((beer,index) => <BeerCard key={index} beer={beer}/>)
  }

  render() {
      return (
        <div>
          <BeerSorter value={this.state.value} handleChange={this.handleChange}/>
          <InfiniteScroll
              pageStart={0}
              loadMore={this.loadFunc}
              hasMore={this.state.more}
              loader={<div className='loaderContainer'><span>{this.state.error}</span><FiLoader className="loader"/></div>}
              >
              <Grid>
                {this.mapBeers()}
              </Grid>
          </InfiniteScroll>
        </div>
      )
  }
}

export default BeerCardsList
