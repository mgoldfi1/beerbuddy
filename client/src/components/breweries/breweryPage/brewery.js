import React from 'react';
import PropTypes from 'prop-types'
import { Grid, Cell } from 'react-mdl';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import BreweryPanel from './breweryPanel'
import PageTitle from '../../pageTitle'
import BreweryBeers from './breweryBeers'
import '../../../css/brewery.css'


const Brewery = (props) => {

 const renderLogo = () => {
    if (brewery.logo) {
      return (<img className="brewery-logo" src={brewery.logo}/>)
    } else {
      return (<img className="brewery-logo" src={require('./nodata.png')}/>)
    }
  }

  const brewery = props.data;
  const bScore = () => {
    let total = 0
    for (const beer of brewery.beers) {
      total = total + beer.ratingAvg
    }
    return (total/brewery.beers.length)
  }

  return (
      !!brewery ? (
          <Grid>
        {console.log(brewery.beers)}
            
            <PageTitle title={brewery.name} colLength={12}/>
            <div>
            <Cell className='brewery-logo-container' col={6}> {renderLogo()}</Cell>
            <Cell className='brewery-panels' col={6}>
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
                <BreweryPanel
                details={bScore() + "/5"}
                summary='BreweryScore'
              />
            </Cell>
            </div>
            <Cell className="brewery-beers-container"col={12}>
              <BreweryBeers beers={brewery.beers}/>
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
