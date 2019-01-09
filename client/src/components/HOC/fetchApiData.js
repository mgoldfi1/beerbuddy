import React, { Component } from 'react';

function fetchApiData(WrappedComponent, fetchLink) {
  return class extends Component {
      state = {
        fetchLink: fetchLink,
        data: null,
        loading: true
      }

    componentDidMount() {
      fetch(`/api/${this.state.fetchLink}`)
      .then(res => res.json())
      .then(json => this.setState({data: json, loading: false}))
    }


    render() {
      if (this.state.loading === false) {
        return <WrappedComponent data={this.state.data} {...this.props}/>;
      } else {
        return null
      }
    }
  };
}

export default fetchApiData
