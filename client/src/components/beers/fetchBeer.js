import React, { Component } from 'react';
import Beer from './beer'

class FetchBeer extends Component {

  state = {
    beer: null
  }

  componentWillMount() {
      fetch('/api/beer' + '/' + this.props.match.params.id)
      .then(res => res.json())
      .then(json => this.setState({beer: json}))
  }

  renderBeer = () => {
    if (this.state.beer){
      return <Beer beer={this.state.beer}/>
    }
  }

  render(){
    return(
      <div>
      {this.renderBeer()}
      </div>
    )
  }
}

export default FetchBeer
