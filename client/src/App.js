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
import BeerSearch from './components/beers/beerSearch/beerSearch'
import ResultsPage from './components/beers/beerSearch/resultsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <Route path="/beer/:id" component={BeerPage} />
          <Route path="/beers/search/:query" component={ResultsPage} />
          <Route exact path="/beers/search" component={BeerSearch} />
          <Route path="/breweries/:id" component={BreweryPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/user/:id" component={UserProfile} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/" component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
