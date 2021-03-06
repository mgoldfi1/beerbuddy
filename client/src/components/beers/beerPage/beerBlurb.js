import React from 'react';
import { Cell } from 'react-mdl';
import BeerBrewery from './beerBrewery'

const BeerBlurb = (props) => {
  const { label, abv, ibu, style, brewery, colLength, handleBlanks } = props
  return (
    <Cell className="beer-blurb" col={colLength}>
      <img className="beer-page-pic" src={label} />
      <div className="beer-page-info">
          <strong>ABV:</strong> {handleBlanks(abv, "%")}<br/>
          <strong>IBU:</strong> {handleBlanks(ibu)}<br/>
          <strong>Style:</strong> {style}<br/>
          <BeerBrewery brewery={brewery}/>
      </div>
    </Cell>
  );
};

export default BeerBlurb
