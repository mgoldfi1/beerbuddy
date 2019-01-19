import React from 'react';
import { Cell } from 'react-mdl'
import BreweryLink from './breweryLink'


const BreweriesList = ({breweries}) => {

  const mapAndSortBreweries = () => {
    breweries = breweries.sort((a, b) => {
              var nameA = a.name.toUpperCase();
              var nameB = b.name.toUpperCase();
              return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
            })
    return breweries.map((brewery, index) => <Cell key={index} col={2}><BreweryLink brewery={brewery}/></Cell>)
  }

    return (
            mapAndSortBreweries()
    )
}

export default BreweriesList
