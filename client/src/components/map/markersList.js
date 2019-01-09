import React from 'react';
import { Marker } from 'google-maps-react';

const MarkersList = ({breweries, onMarkerClick}) => {

  const mapBreweries = () => {
    return breweries.map((brewery, index) => <Marker onClick={onMarkerClick} key={index} position={{lat: brewery.latitude, lng: brewery.longitude}} title={brewery.name} name={brewery.name} website={brewery.website}>
    </Marker>)
  }

    return (
      mapBreweries()
    )
}

export default MarkersList
