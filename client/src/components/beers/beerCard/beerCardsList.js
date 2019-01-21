import React, { Component } from 'react';
import BeerCard from './beerCard'
import { Grid, Cell } from 'react-mdl'
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom'
import BeerSorter from '../beerSorter/beerSorter'
import { FiLoader } from "react-icons/fi";
import '../../../css/beer.css'

const resetValues = {
    beers: [],
    page: 0,
    more: true
}

class BeerCardsList extends Component {

  state = {
        ...resetValues,
          filter: "abv",
          order: 'ASC',
          error: null
      }


  loadFunc = async (page) => {
     const res = await fetch(
       `/api/beer/filter/${this.state.filter}?page=${this.state.page}&order=${this.state.order}`
     )
     const body = await res.json()
     if (res.status === 200){
         this.setState(currentState => ({beers: [...currentState.beers, ...body.beers], page: currentState.page + 1}) )
     } else {
       this.setState({more: false})
     }
}

  handleChange = (event) => {
      this.setState({...resetValues, filter: event.target.value});
    };

  handleOrderChange = (event) => {
    this.setState({...resetValues, order: event.target.value})
  }

  mapBeers = () => {
    let beers = this.state.beers
    return  beers.length > 0 ? beers.map((beer,index) => <BeerCard key={index} beer={beer}/>) : null
  }

  render() {
      return (
        <div>
          <BeerSorter
          filter={this.state.filter}
          onChange={this.handleChange}
          order={this.state.order}
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
