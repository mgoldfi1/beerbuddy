import React, { Component } from 'react';
import Navbar from '../navbar';
import { Grid, Cell } from 'react-mdl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const Brewery = (props) => {
  const brewery = props.data;
  const { isLoading, hasError } = props;
  console.log(props)
  return (
    <React.Fragment>
      {isLoading ? <p>Loading</p> : null}
      {hasError ? <p>Error</p> : null}
      {!!brewery ? (
        <React.Fragment>
          <Navbar />
          <Grid>
            <Cell col={12}>
              <h1>{brewery.name}</h1>
            </Cell>
          </Grid>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Brewery