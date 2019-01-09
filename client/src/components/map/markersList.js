import React from 'react';
import { Marker } from 'google-maps-react';

const MarkersList = ({breweries, onMarkerClick}) => {

    return (
      breweries.map((brewery, index) => {
        return(
          <Marker onClick={onMarkerClick} key={index} position={{lat: brewery.latitude, lng: brewery.longitude}} title={brewery.name} name={brewery.name} website={brewery.website}>
          </Marker>
        )
      })
    )
}

export default MarkersList
