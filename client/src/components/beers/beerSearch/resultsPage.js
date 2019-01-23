import React, { Component } from 'react'

export default class ResultsPage extends Component {

  state = {
      beers: []
  }  
  componentWillMount() {
      fetch('/api/beer/search/query' + this.props.location.search)
      .then( res => res.json())
      .then(beers => this.setState({beers: [...beers]}))
  }

  render() {
    {console.log(this.state)}

    return (
      <div>
      </div>
    )
  }
}
