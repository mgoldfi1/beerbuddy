import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import BreweryList from './breweryList'


const apiKey = require('./apikey')
const mapStyles = {
  width: '50%',
  height: '50%'
};
const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }
})

 class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
            location: '',
            isOpen: false
        }
    }

    handleSearch = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=${apiKey}`)
        .then(res => res.json())
        .then(json => {this.setState({lat: json.results[0].geometry.location.lat, lng: json.results[0].geometry.location.lng })})
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
            <div className="map">
            <TextField
                id="outlined-email-input"
                label="Zipcode or Address"
                type="text"
                name="address"
                margin="normal"
                variant="outlined"
                style={{height: 40, margin: 5}}
                onChange={(event) => this.setState({location: event.target.value})}
            />
            <Button variant="contained" onClick={this.handleSearch}style={{marginTop: 5}}color="primary">
                Find Breweries
            </Button>
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
             center={{
             lat: this.state.lat,
             lng: this.state.lng
            }}
                >
                <Marker position={{lat: '40.6710729', lng:'-73.9988001'}} name="hello">
                <InfoWindow onCloseClick={this.handleToggle}>
                        <div>
                            First Brewery
                        </div>
                    </InfoWindow>
                </Marker>
            </Map>
          </div>
          <div className="list"><BreweryList/></div> 
          </div>
          )
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