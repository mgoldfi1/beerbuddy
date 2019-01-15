import React from 'react';
import { Cell } from 'react-mdl';

const BeerTitle = ({colLength, name}) => {

  return (
    <Cell col={colLength}>
      <h1>{name}</h1>
    </Cell>
  );
};

export default BeerTitle
