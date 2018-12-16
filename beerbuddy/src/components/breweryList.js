import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid, Cell } from 'react-mdl'


export default class BreweryList extends Component {

    constructor(props) {
        super(props);
        this.state = {breweries: []}
    }

    componentWillMount() {
        fetch('/api/breweries')
        .then(res => res.json())
        .then(json => this.setState({breweries: json.breweries.sort(
            function(a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
            }
        )}))
    }

    render() {
        {console.log(this.state.breweries)}
        return (
            <div>
                <strong>Click on a brewery below to visit its page:</strong>
                <Grid className="list">
                {this.state.breweries.map(
                    brewery => {
                        return (
                        <Cell col={2}>
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