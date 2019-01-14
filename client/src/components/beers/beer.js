import React, { Component } from 'react';
import Navbar from '../navbar';
import { Grid, Cell } from 'react-mdl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { FiLoader } from "react-icons/fi";

const Beer = (props) => {
  const beer = props.data;
  return (
      !!beer ? (
        <React.Fragment>
          <Navbar />
          <Grid>
            <Cell col={12}>
              <h1>{beer.name}</h1>
            </Cell>
            <Cell col={6}>
              <p>
                <strong>Description:</strong>
                <br />
                {beer.desc}
              </p>
              <div>
                <strong>Reviews for this beer: 0</strong>
              </div>
              <div>
                <strong>Ratings for this beer: 0</strong>
              </div>
            </Cell>
            <Cell className="beerBlurb" col={6}>
              <img className="beerPagePic" src={beer.label} />
              <div className="beerPageInfo">
                <div className="beerText">
                  <strong>ABV:</strong> {beer.abv}%
                </div>
                <div className="beerText">
                  <strong>IBU:</strong> {beer.ibu}
                </div>
                <div className="beerText">
                  <strong>Style:</strong> {beer.style}
                </div>
                <div className="beerText">
                  <strong>Brewery Name:</strong> {beer.brewery.name}
                </div>
                <div className="beerText">
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
        </React.Fragment>
      ) : null
  );
};

export default Beer
