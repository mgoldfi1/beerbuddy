import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import BreweriesContainer from '../breweries/breweriesContainer'
import { Grid, Cell } from 'react-mdl'
import '../../css/map.css'
import BrewerySearchBar from './brewerySearchBar'
import MarkersList from './markersList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BreweryLink from '../breweries/breweryLink'
const apiKey = require('../apikey')

 class MapContainer extends Component {
   state = {
        lat: 39.8333333,
        lng: -98.585522,
        location: '',
        noResults: false,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        zoom: 5
    }

    componentWillMount() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.setState({lat: position.coords.latitude, lng: position.coords.longitude, zoom: 14 }) })
          }
      }

    handleSearch = () => {
        if (this.state.location){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=${apiKey}`)
        .then(res => res.json())
        .then(json => {return json.status === "OK" ? this.setState({lat: json.results[0].geometry.location.lat, lng: json.results[0].geometry.location.lng, zoom: 10, noResults: false }) : this.setState({noResults: true}) })
        }
    }

    handleChange = (event) => {
      this.setState({location: event.target.value})
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
             lat: props.position.lat,
             lng: props.position.lng,
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

    renderMarkers = () => {
        return (
            this.props.data.breweries.map((brewery,index) => {
                return (
                    <Marker key={index} onClick={this.onMarkerClick} position={{lat: brewery.latitude, lng: brewery.longitude}} breweryPage={brewery.id} title={brewery.name} name={brewery.name} website={brewery.website}>
                    </Marker>
                )
            })
        )
    }

    breweryNav = () => {
      console.log("hello")
    }


    render() {
        const center = {lat: this.state.lat, lng: this.state.lng}
        return (
          <div>
            <div className="map">
              <BrewerySearchBar handleSearch={this.handleSearch} handleChange={this.handleChange} noResults={this.state.noResults}/>
              <Grid>
                <Cell col={12}>
                  <Map
                  className='brewery-map'
                  onClick={this.onMapClicked}
                  google={this.props.google}
                  zoom={this.state.zoom}
                  minZoom={2}
                  initialCenter={center}
                  center={center}
                      >
                  {this.renderMarkers()}
                  <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                      <p>
                        <strong> <a className='marker-link'
                        href={`/breweries/${this.state.selectedPlace.breweryPage}`}>
                        {this.state.selectedPlace.name}</a>
                        </strong><br/>
                        <a href={this.state.selectedPlace.website} target="_blank">Company Website</a><br/>
                      </p>
                  </InfoWindow>
                </Map>
              </Cell>
            </Grid>
          </div>
          <BreweriesContainer breweries={this.props.data.breweries} onMarkerClick={this.onMarkerClick}/>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey
  })(MapContainer);
