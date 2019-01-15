import React from 'react';
import { Grid, Cell } from 'react-mdl';
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
              <strong style={{fontSize: '16px'}}>Beers made by this brewery:</strong><br/>
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

  // <div style={{width: '100vw', height: '10vh'}}/>

export default Brewery
