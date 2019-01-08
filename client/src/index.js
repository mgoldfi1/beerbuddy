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
import FetchBeer from './components/beers/fetchBeer'
import RegistrationForm from './components/login/registrationform'

ReactDOM.render(
<BrowserRouter>
<React.Fragment>
<Route exact path="/" component={App} />
<Route path="/beer/:id" component={FetchBeer} />
<Route exact path="/login" component={LoginForm} />
<Route exact path="/registration" component={RegistrationForm} />
</React.Fragment>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
