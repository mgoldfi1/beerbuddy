import React, { Component } from 'react';
import Navbar from '../navbar';
import { Grid, Cell } from 'react-mdl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


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
            <Cell className="breweryHeader" col={12}>
              <h1>{brewery.name}</h1>
            </Cell>
            <div style={{width: '100vw', height: '10vh'}}/>
            <Cell col={6}>
            <ExpansionPanel>
                <ExpansionPanelSummary >
                <Typography style={{fontSize: '16px'}}><strong>Location</strong></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography style={{fontSize: '14px'}}>
            {brewery.region + ', ' + brewery.country}
            </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary >
                <Typography style={{fontSize: '16px'}} ><strong>Description</strong></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography style={{fontSize: '14px'}}>
            {brewery.description}
            </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary >
                <Typography style={{fontSize: '16px'}} ><strong>Founded In</strong></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography style={{fontSize: '14px'}}>
            {brewery.year}
            </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary >
                <Typography style={{fontSize: '16px'}} ><strong>Brewery Website</strong></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography style={{fontSize: '14px'}}>
            <a href={brewery.website} target="_blank">{brewery.website}</a>
            </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary >
                <Typography style={{fontSize: '16px'}}><strong>Open to the public?</strong></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography style={{fontSize: '14px'}}>
            {brewery.openToPublic === "Y" ? "Yes":"No"}
            </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            </Cell>
            <Cell col={12}>
            <div style={{fontSize: '16px'}}><strong>Beers made by this brewery:</strong></div>
                {brewery.Beers.map(beer => {
                    return <div style={{display: "inline"}}><Link to={"/beer/" + beer.id}><img className="breweryBeers" src={beer.label}/></Link></div>
                })}
            </Cell>
          </Grid>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Brewery