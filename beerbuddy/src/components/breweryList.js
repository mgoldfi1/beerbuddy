import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
                <List>
                {this.state.breweries.map(
                    brewery => {
                        return (
                        <ListItem button>
                        <ListItemText primary={brewery.name}/>
                        </ListItem>
                        )
                    } 
                )}
                </List>
            </div>
        )
    }
}