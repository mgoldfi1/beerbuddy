import React, { Component } from 'react';
import Brewery from './brewery';
import fetchApiData from '../../HOC/fetchApiData';


export default class BreweryPage extends Component {

    render() {
        const BreweryWithFetch = fetchApiData(Brewery, `breweries/${this.props.match.params.id}`);

        return (
            <BreweryWithFetch/>
        )
    }


}
