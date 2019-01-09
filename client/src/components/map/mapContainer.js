import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import BreweriesContainer from '../breweries/breweriesContainer'
import { Grid, Cell } from 'react-mdl'
import '../../css/map.css'

const apiKey = require('../apikey')

// const mapStyles = {
//   width: '100%',
//   height: '50%'
// };
// const styles = theme => ({
//     textField: {
//       marginLeft: theme.spacing.unit,
//       marginRight: theme.spacing.unit,
//       width: 200,
//     }
// })

 class MapContainer extends Component {
   state = {
        lat: 39.8333333,
        lng: -98.585522,
        location: '',
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        breweries: [],
        zoom: 5
    }

    handleSearch = () => {
        if (this.state.location){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=${apiKey}`)
        .then(res => res.json())
        .then(json => {this.setState({lat: json.results[0].geometry.location.lat, lng: json.results[0].geometry.location.lng, zoom: 10 })})
        }
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
             lat: marker.position.lat,
             lng: marker.position.lng,
             selectedPlace: props,
             activeMarker: marker,
             showingInfoWindow: true
    });
}

    onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
        }
    };

    componentWillMount() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.setState({lat: position.coords.latitude, lng: position.coords.longitude, zoom: 14 }) })
          }
    }

    renderMarkers = () => {
        return (
            this.state.breweries.map(brewery => {
                return (
                    <Marker onClick={this.onMarkerClick} position={{lat: brewery.latitude, lng: brewery.longitude}} title={brewery.name} name={brewery.name} website={brewery.website}>
                    </Marker>
                )
            })
        )
    }

    render() {
        return (
          <div>
          <div className="map">
          <TextField
              id="outlined-email-input"
              label="Zipcode or Address"
              type="text"
              name="address"
              margin="normal"
              variant="outlined"
              style={{height: 40, margin: 7}}
              onChange={(event) => this.setState({location: event.target.value})}
          />
          <Button variant="contained" onClick={this.handleSearch}style={{marginTop: 8}}color="primary">
              Find Breweries
          </Button>
          <Grid>
          <Cell col={12}>
          <Map
          className='brewery-map'
          onClick={this.onMapClicked}
          google={this.props.google}
          zoom={this.state.zoom}
          center={{
           lat: this.state.lat,
           lng: this.state.lng
          }}
              >
              {this.renderMarkers()}
              <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
              <div>
                  <p><strong>{this.state.selectedPlace.name}</strong><br/>
                  <a href={this.state.selectedPlace.website} target="_blank">Company Website</a></p>
              </div>
      </InfoWindow>
          </Map>
          </Cell>
          </Grid>
        </div>
        <BreweriesContainer/>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey
  })(MapContainer);
