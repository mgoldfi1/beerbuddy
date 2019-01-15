import React, { Component } from 'react';
import Navbar from '../../navbar';
import { Grid, Cell } from 'react-mdl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import BeerTitle from './beerTitle'
import BeerMisc from './beerMisc'
import BeerBlurb from './beerBlurb'
import '../../../css/beer.css'

const Beer = (props) => {
  const beer = props.data;
  return (
      !!beer ? (
          <Grid>
            <BeerTitle name={beer.name} colLength={12}/>
            <BeerMisc desc={beer.desc} colLength={6}/>
            <BeerBlurb {...beer} colLength={6}/>
            <Cell className='similar-beers' col={12}>
                <strong>Beers With A Similar Style</strong>
            </Cell>
          </Grid>
      ) : null
  );
};

export default Beer
