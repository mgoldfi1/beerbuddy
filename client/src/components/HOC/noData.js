import React, { Component } from 'react';

function noData(WrappedComponent) {
  return class extends Component {

    handleBlanks = (el, chars='') => {
      return (el === null || el === undefined) ? "N/A" : el + chars
    }

    render() {
      return <WrappedComponent {...this.props} handleBlanks={this.handleBlanks}/>
    }
  };
}

export default noData;
