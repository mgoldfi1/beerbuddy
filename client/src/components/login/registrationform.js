import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Icon from '@material-ui/core/Icon';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  import { logIn } from '../../actions/logIn';
import { connect } from 'react-redux';

class RegistrationForm extends Component {

constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        passwordConfirmation: ''
    }
}


registration = () => {
    console.log(this.state)
    fetch('/api/users/registration',
    {method: 'post',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
    }
    )
    .then(res => res.json())
    .then(user => {
        if (user.user) {
        this.props.logIn(user.user)
        }
    })

}

redirectMe = () => {
    if (this.props.user) {
        return <Redirect to='/' />
    }

}


render()  {

    return (
        <React.Fragment>
            {this.redirectMe()}
        <div className="spacer"/>
        <div className="login-box">
        <TextField
          onChange={(event) => this.setState({email: event.target.value})}
          required
          id="outlined-required"
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
        />
        <div>
        </div>
         <TextField
          onChange={(event) => this.setState({password: event.target.value})}
          required
          id="outlined-required"
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
        />
        <div>
        <TextField
          required
          onChange={(event) => this.setState({passwordConfirmation: event.target.value})}
          id="outlined-required"
          label="Confirm Password"
          type="password"
          margin="normal"
          variant="outlined"
        />
        <div style={{color: 'red'}}>{this.state.password !== this.state.passwordConfirmation ? "The passwords do not match." : null}</div>
        <div style={{color: 'red'}}>{ 6 > this.state.password.length || this.state.password.length > 12 ? "Password must be between 6-12 characters." : null}</div>
        </div>
        </div>
        <div className="login-box">
        <div className="button">
        <Button variant="contained" color="primary" onClick={this.registration}>Sign Up</Button>
         </div>
         </div>
        </React.Fragment>
    )
}

}
const mapStateToProps = (state) => {
    return {
      user: state.user.user
    }
  }
   
export default connect(mapStateToProps, { logIn })(RegistrationForm)