import React, { Component } from 'react';
import { Link } from 'react-router-dom'

 class BreweryBeerLink extends Component {

   // constructor(props) {
   //   super(props);
   //   this.refId = React.createRef();
   //   console.log(this.refId)
   // }

    render() {
        return (
          <Link
           className='brewery-beer-links'
           key={this.props.index}
           ref={this.refId}
           to={"/beer/" + this.props.id}>
           <img className="brewery-beers" src={this.props.label}/>
          </Link>
        )
    }


}

export default BreweryBeerLink
