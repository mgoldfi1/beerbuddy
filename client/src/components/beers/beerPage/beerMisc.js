import React from 'react';
import { Cell } from 'react-mdl';

const BeerMisc = ({colLength, desc}) => {

  return (
    <Cell col={colLength}>
      <p>
        <strong>Description:</strong>
        <br />
        {desc}
      </p>
        <strong>Reviews for this beer: 0</strong>
        <br/>
        <strong>Ratings for this beer: 0</strong>
    </Cell>
  );
};

export default BeerMisc
