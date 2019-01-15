import React, { Component } from 'react';
import { FiLoader } from "react-icons/fi";

function fetchApiData(WrappedComponent, fetchLink) {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
      hasError: false
    };

    componentDidMount() {
      fetch(`/api/${fetchLink}`)
        .then(res => res.json())
        .then(json => this.setState({ data: json, isLoading: false }))
        .catch(err => this.setState({ hasError: true }));
    }

    renderComponent = () => {
      if (this.state.isLoading) {
        return <FiLoader className="loader"/>
      } else if ( this.state.hasError) {
        return 'Error'
      } else {
        return <WrappedComponent {...this.state} {...this.props} />
      }
    }

    render() {
      return this.renderComponent()
    }
  };
}

export default fetchApiData;
