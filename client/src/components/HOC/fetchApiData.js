import React, { Component } from 'react';

function fetchApiData(WrappedComponent, fetchLink) {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
      hasError: false,
    };

    componentDidMount() {
      fetch(`/api/${fetchLink}`)
        .then(res => res.json())
        .then(json => this.setState({ data: json, isLoading: false }))
        .catch(err => this.setState({ hasError: true }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}

export default fetchApiData;
