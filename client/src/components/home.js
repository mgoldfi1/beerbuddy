import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl'
import BeerCardsList from './beers/beerCard/beerCardsList'
import FetchApiData from './HOC/fetchApiData'
import MapContainer from './map/mapContainer'
import '../App.css'
import { connect } from 'react-redux';
import { tabClicked } from '../actions/tabClicked'

 class Home extends Component {
    state = { beer: ''}

    tabSwitch = () => {
      const MapContainerWithFetchBreweries = FetchApiData(MapContainer, 'breweries')
       switch (this.props.tab) {
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
            <Tabs activeTab={this.props.tab} onChange={(tabId) => this.props.tabClicked(tabId) } ripple>
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
        tab: state.user.tab
    }
}

export default connect(mapStateToProps, { tabClicked })(Home)