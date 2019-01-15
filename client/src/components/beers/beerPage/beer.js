import React, { Component } from 'react';
import Navbar from '../../navbar';
import { Grid, Cell } from 'react-mdl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import BeerTitle from './beerTitle'
import '../../../css/beer.css'

const Beer = (props) => {
  const beer = props.data;
  return (
      !!beer ? (
          <Grid>
            <BeerTitle name={beer.name} colLength={12}/>
            <Cell col={6}>
              <p>
                <strong>Description:</strong>
                <br />
                {beer.desc}
              </p>
                <strong>Reviews for this beer: 0</strong>
                <br/>
                <strong>Ratings for this beer: 0</strong>
            </Cell>
            <Cell className="beer-blurb" col={6}>
              <img className="beer-page-pic" src={beer.label} />
              <div className="beer-page-info">
                <div className="beer-text">
                  <strong>ABV:</strong> {beer.abv}%
                </div>
                <div className="beer-text">
                  <strong>IBU:</strong> {beer.ibu}
                </div>
                <div className="beer-text">
                  <strong>Style:</strong> {beer.style}
                </div>
                <div className="beer-text">
                  <strong>Brewery Name:</strong> {beer.brewery.name}
                </div>
                <div className="beer-text">
                  <strong>Brewery Website:</strong>{' '}
                  <a href={beer.brewery.website} target="_blank">
                    {beer.brewery.website}
                  </a>
                </div>
              </div>
            </Cell>
            <Cell col={12}>
              <div>
                <strong>Beers With A Similar Style</strong>
              </div>
            </Cell>
          </Grid>
      ) : null
  );
};

export default Beer
