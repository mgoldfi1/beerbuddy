import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

 class Navbar extends Component {

    changeNav = () => {
        if (this.props.user) {
            return  (<Link to={"/user/" + this.props.user.id}>{this.props.user.email}</Link>)
        } else {
            return (<Link to="/login">LOG IN</Link>)
        }
    }

    render() {
        return(
            <div style={{height: '100px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Beer</span><strong>Buddy</strong></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <a href="#">Beers</a>
                <a href="#">Breweries</a>
                {this.changeNav()}
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
const mapStateToProps = (state) => {
    return {
      user: state.user.user
    }
  }

export default connect(mapStateToProps)(Navbar)