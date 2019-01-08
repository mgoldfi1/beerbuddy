import React from 'react';
import BreweryLink from './breweryLink'


const BreweriesList = ({breweries}) => {

  // .then(json => this.setState({breweries: json.breweries.sort(
  //     function(a, b) {
          // var nameA = a.name.toUpperCase();
          // var nameB = b.name.toUpperCase();
          // return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  //     }

  console.log(breweries)

  const mapAndSortBreweries = () => {
    let breweries = breweries.sort((a, b) => {
              var nameA = a.name.toUpperCase();
              var nameB = b.name.toUpperCase();
              return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
            })
    return breweries.map((brewery, index) => <BreweryLink key={index} brewery={brewery}/>)
  }

    return (
            mapAndSortBreweries()
    )
}

export default BreweriesList