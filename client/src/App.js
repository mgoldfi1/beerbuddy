import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Navbar from './components/navbar'
import BreweryPage from './components/breweries/breweryPage/breweryPage'
import LoginForm from './components/login/loginform'
import BeerPage from './components/beers/beerPage/beerPage'
import RegistrationForm from './components/login/registrationform'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserProfile from './components/userProfile'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <Route path="/beer/:id" component={BeerPage} />
          <Route path="/breweries/:id" component={BreweryPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/user/:id" component={UserProfile} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/" component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
