import React, { Component } from 'react';

const FetchApiData = (WrappedComponent, fetchLink) => {
  return class FetchApiData extends Component {
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

    renderComponent = () => {
      return this.state.loading === false ? <WrappedComponent data={this.state.data} {...this.props}/> : null
    }


    render() {
      return(
        this.renderComponent()
      )
    }
  };
}

export default FetchApiData
