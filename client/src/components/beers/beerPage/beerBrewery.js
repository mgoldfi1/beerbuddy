import React from 'react';

const BeerBrewery = ({brewery}) => {
  const { name, website } = brewery
  return (
        <>
          <strong>Brewery Name:</strong> {name}<br/>
          <strong>Brewery Website:</strong>{' '}
          <a href={website} target="_blank">
            {website}
          </a>
          </>
  );
};

export default BeerBrewery
