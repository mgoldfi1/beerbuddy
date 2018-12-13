import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1}
    }
    
    tabSwitch = () => {
       switch (this.state.activeTab) {
           case 2:
           return (<div>Top</div>)
           case 0:
           return (<div>beers</div>)
           case 1: 
           return (<div>breweries</div>)
       }
        
    }
    render() {
        
        return (
            <div className="demo-tabs">
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

