import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl'
import BeerCardsList from './beers/beerCard/beerCardsList'
import FetchApiData from './HOC/fetchApiData'
import MapContainer from './map/mapContainer'
import '../App.css'
import { connect } from 'react-redux';
import { tabClicked } from '../actions/tabClicked'

 class Home extends Component {
    state = { activeTab: 0, beer: ''}

    tabSwitch = () => {
      const MapContainerWithFetchBreweries = FetchApiData(MapContainer, 'breweries')
       switch (this.state.activeTab) {
           case 2:
           return (<div>Top</div>)
           case 0:
           return (<BeerCardsList/>)
           case 1:
           return (<MapContainerWithFetchBreweries/>)
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

const mapStateToProps = state => {
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps, { tabClicked })(Home)