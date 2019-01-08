import React from 'react';
import BreweryLink from './breweryLink'


const BreweriesList = ({breweries}) => {

  // .then(json => this.setState({breweries: json.breweries.sort(
  //     function(a, b) {
  //         var nameA = a.name.toUpperCase();
  //         var nameB = b.name.toUpperCase();
  //         return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  //     }

  const mapAndSortBreweries = () => {
    return breweries.sort((brewery, index) => )
  }

    return (
              <Cell col={2}>
              <Link className="beer-links" to={'/beer' + '/' + beer.id} > </Link>
              </Cell>
    )
}

export default BreweriesList
