import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { logOut } from '../actions/logOut'
import '../css/navbar.css'
 class Navbar extends Component {

    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null });
      }

      handleClose = () => {
        this.setState({ anchorEl: null });
        this.props.logOut()
      };

    changeNav = () => {
        if (this.props.user) {
            return  (<div> <Button
                aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                className="nav-button"
                onClick={this.handleClick}
              >
                {this.props.user.email}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleMenuClose}
              >
                <MenuItem><Link onClick={this.handleMenuClose} className="undecorated-link" to={"/user/" + this.props.user.id}>Profile</Link></MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
              </div>)
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
                <Link to="/beers/search">Beers</Link>
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

export default connect(mapStateToProps, { logOut })(Navbar)