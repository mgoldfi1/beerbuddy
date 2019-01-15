import React from 'react';
import { Grid, Cell } from 'react-mdl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import BreweryPanel from './breweryPanel'
import PageTitle from '../../pageTitle'
import PropTypes from 'prop-types'
import '../../../css/brewery.css'


const Brewery = (props) => {
  const brewery = props.data;
  return (
      !!brewery ? (
          <Grid>
            <PageTitle title={brewery.name} colLength={12}/>
            <div style={{width: '100vw', height: '10vh'}}/>
              <Cell col={6}>
                <BreweryPanel details={[brewery.region, brewery.country]} summary='Location'/>
                <BreweryPanel details={brewery.description} summary='Description'/>
                <BreweryPanel details={brewery.year} summary='Founded In'/>
                <BreweryPanel
                  details={<a href={brewery.website} target="_blank"> {brewery.website}</a>}
                  summary='Brewery Website'
                 />
                <BreweryPanel
                  details={brewery.openToPublic === "Y" ? "Yes":"No"}
                  summary='Open to the Public?'
                />
              </Cell>
            <Cell col={12}>
            <div style={{fontSize: '16px'}}><strong>Beers made by this brewery:</strong></div>
                {brewery.Beers.map(beer => {
                    return <div style={{display: "inline"}}><Link target="_blank" to={"/beer/" + beer.id}><img className="brewery-beers" src={beer.label}/></Link></div>
                })}
            </Cell>
          </Grid>
      ) : null
  );
};

Brewery.propTypes = {
  data: PropTypes.object.isRequired
}


export default Brewery
