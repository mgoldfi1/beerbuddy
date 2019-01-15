import React from 'react';
import { Link } from 'react-router-dom'
const BeerBrewery = ({brewery}) => {
  const { name, website, id } = brewery
  return (
        <>
          <strong>Brewery Name:</strong> <Link to={'/breweries/' + id}>{name}</Link><br/>
          <strong>Brewery Website:</strong>{' '}
          <a href={website} target="_blank">
            {website}
          </a>
          </>
  );
};

export default BeerBrewery
