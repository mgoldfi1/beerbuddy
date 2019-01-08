import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl'
import BeerContainer from './beers/beerContainer'
import MapContainer from './map/mapContainer'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0, beer: ''}
    }

    tabSwitch = () => {
       switch (this.state.activeTab) {
           case 2:
           return (<div>Top</div>)
           case 0:
           return (<div className="cardContainer"><BeerContainer/></div>)
           case 1:
           return (<div className="mapContainer"><MapContainer/></div>)
       }
    }


    render() {
        return (
            <div className="demo-tabs">
            <div>{this.state.beer.name}</div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Beers</Tab>
                <Tab>Breweries</Tab>
                <Tab>Top Rated</Tab>
            </Tabs>
            <section>
                {this.tabSwitch()}

            </section>
        </div>
        )
    }
}
