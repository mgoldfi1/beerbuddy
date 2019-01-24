import React, { Component } from 'react';
import Navbar from '../../navbar';
import { Grid, Cell } from 'react-mdl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import PageTitle from '../../pageTitle'
import BeerMisc from './beerMisc'
import BeerBlurb from './beerBlurb'
import '../../../css/beer.css'
import { connect } from 'react-redux';
import { compose } from 'redux'
import FavoriteButton from './favoriteButton'
import noData from '../../HOC/noData'

const Beer = (props) => {
  const beer = props.data;
  return (
      !!beer ? (
          <Grid>
            <PageTitle title={beer.name} colLength={12}/>
            {props.user ? <Cell col={12}><FavoriteButton user={props.user} beerId={beer.id}/></Cell> : null}
            <BeerMisc user={props.user} beerId={beer.id} ratings={beer.ratingCount} avg={beer.ratingAvg} desc={props.handleBlanks(beer.description)} colLength={6}/>
            <BeerBlurb {...beer} {...props} colLength={6}/>
            <Cell className='similar-beers' col={12}>
                <strong>Beers With A Similar Style</strong>
            </Cell>
          </Grid>
      ) : null
  );
};

const mapStateToProps = (state) => {
    return {
      user: state.user.user
    }
  }

export default compose(connect(mapStateToProps), noData)(Beer)
