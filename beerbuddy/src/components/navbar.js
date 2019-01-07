import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return(
            <div style={{height: '100px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Beer</span><strong>Buddy</strong></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <a href="#">Beers</a>
                <a href="#">Breweries</a>
                <Link to="/login">LOG IN</Link>
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