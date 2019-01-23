import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ResultsPage extends Component {

  state = {
      beers: []
  }  
  componentWillMount() {
      fetch('/api/beer/search/query' + this.props.location.search)
      .then( res => res.json())
      .then(beers => this.setState({beers: [...beers]}))
  }

  mapBeers = () => {
      return this.state.beers.map(beer =>
    {
        return <div className="resultsBeers"><Link to={"/beer/" + beer.id}>{beer.name}</Link></div>
    })
  }

  render() {
    return (
      <div>
          <h2>Your search returned {this.state.beers.length} beer(s)</h2>
          {this.mapBeers()}
      </div>
    )
  }
}
