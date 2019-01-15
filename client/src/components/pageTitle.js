import React from 'react';
import { Cell } from 'react-mdl';

const PageTitle = ({colLength, title}) => {

  return (
    <Cell className='title' col={colLength}>
      <h1>{title}</h1>
    </Cell>
  );
};

export default PageTitle
