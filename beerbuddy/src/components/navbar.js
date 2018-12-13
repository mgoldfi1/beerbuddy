import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl'


export default class Navbar extends Component {

    render() {
        return(
            <div style={{height: '100px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Beer</span><strong>Buddy</strong></span>}>
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Beers</a>
                <a href="#">Breweries</a>
                <a href="#">LOG IN</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        
    </Layout>
</div>
        )
    }
}