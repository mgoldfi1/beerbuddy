import React, { Component } from 'react';

function noData(WrappedComponent, propKey) {
  return class extends Component {

    state = {...this.props[propKey]}

    componentDidMount(){
      const props = this.props[propKey]
      for ( var key in props) {
        if (props[key] === null || props[key] === undefined){
          this.setState({[key]: "N/A"})
        }
      }
    }

    render() {
      return <WrappedComponent {...this.state}/>
    }
  };
}

export default noData;
