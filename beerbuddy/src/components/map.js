import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 const apiKey = require('./apikey')
const mapStyles = {
  width: '50%',
  height: '50%'
};


 class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0
        }
    }

    componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              this.setState({lat: position.coords.latitude, lng: position.coords.longitude }) })
            }
    }

    renderMap = () => {
        return ( 
            <div>
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
             center={{
             lat: this.state.lat,
             lng: this.state.lng
            }}
          /></div> )
    }
    render() {
        return (
            <div>
            {this.renderMap()}
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey
  })(MapContainer);