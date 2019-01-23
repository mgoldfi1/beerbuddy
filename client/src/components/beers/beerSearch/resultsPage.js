import React, { Component } from 'react'

export default class ResultsPage extends Component {

  componentWillMount() {
      fetch('/api/beer/search/query' + this.props.location.search)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
