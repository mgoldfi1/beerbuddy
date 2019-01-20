import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom'
import BeerSorter from '../beerSorter/beerSorter'
import { FiLoader } from "react-icons/fi";
import '../../../css/beer.css'

class BeerCardsList extends Component {

  state = {
          beers: [],
          value: "abv",
          order: 'ASC',
          page: 0,
          more: true,
          error: null
      }


  loadFunc = async (page) => {
     const res = await fetch(
       `/api/beer/${this.state.value}?page=${this.state.page}&order=${this.state.order}`
     )
     const body = await res.json()
     if (res.status === 200){
         this.setState(currentState => ({beers: [...currentState.beers, ...body.beers], page: currentState.page + 1}) )
     } else {
       this.setState({more: false})
     }
}

  handleChange = (event) => {
      this.setState({beers: [], value: event.target.value, page: 0, more:true });
    };

  handleOrderChange = (event) => {
    this.setState({order: event.target.value})
  }

  mapBeers = () => {
    let beers = this.state.beers
    return  beers.length > 0 ? beers.map((beer,index) => <BeerCard key={index} beer={beer}/>) : null
  }

  render() {
      return (
        <div>
          <BeerSorter
          value={this.state.value}
          onChange={this.handleChange}
          sortValue={this.state.sortValue}
          onOrderChange={this.handleOrderChange}
          />
          <InfiniteScroll
              pageStart={0}
              loadMore={this.loadFunc}
              hasMore={this.state.more}
              loader={<FiLoader key={1} className="loader"/>}
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
