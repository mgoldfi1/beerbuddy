import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home'
import LoginForm from './components/login/loginform'
import BeerWrapper from './components/beers/beerWrapper'
import RegistrationForm from './components/login/registrationform'
import rootReducer from './reducers/rootReducer';
import BreweryPage from './components/breweries/breweryPage'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/beer/:id" component={BeerWrapper} />
        <Route path="/breweries/:id" component={BreweryPage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/registration" component={RegistrationForm} />
    </React.Fragment>
    </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
