import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid, Cell } from 'react-mdl'


class BreweriesList extends Component {

  // .then(json => this.setState({breweries: json.breweries.sort(
  //     function(a, b) {
  //         var nameA = a.name.toUpperCase();
  //         var nameB = b.name.toUpperCase();
  //         return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  //     }

    render() {
        return (
            <div>
              <strong>Click on a brewery below to visit its page:</strong>
              <Grid className="list">
              {this.props.breweries.map(
                  (brewery,i) => {
                      return (
                      <Cell key={i} col={2}>
                      <div className="breweryCell"><a href="#">{brewery.name}</a></div>
                      </Cell>
                      )
                  }
              )}
              </Grid>
            </div>
        )
    }
}

export default BreweriesList
