import React from 'react';
import { Cell } from 'react-mdl';

const BeerBlurb = (props) => {
  const { label, abv, ibu, style, brewery, colLength } = props
  return (
    <Cell className="beer-blurb" col={colLength}>
      <img className="beer-page-pic" src={label} />
      <div className="beer-page-info">
        <div className="beer-text">
          <strong>ABV:</strong> {abv}%
        </div>
        <div className="beer-text">
          <strong>IBU:</strong> {ibu}
        </div>
        <div className="beer-text">
          <strong>Style:</strong> {style}
        </div>
        <div className="beer-text">
          <strong>Brewery Name:</strong> {brewery.name}
        </div>
        <div className="beer-text">
          <strong>Brewery Website:</strong>{' '}
          <a href={brewery.website} target="_blank">
            {brewery.website}
          </a>
        </div>
      </div>
    </Cell>
  );
};

export default BeerBlurb
