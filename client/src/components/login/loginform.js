import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Icon from '@material-ui/core/Icon';
import Facebook from './facebook';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import '../../css/user.css'
import { logIn } from '../../actions/logIn';
import { connect } from 'react-redux';



class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    err: ''
  }

  logIn = () => {
    fetch('/api/users/login',
    {method: 'post',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
    }
    )
    .then(res => res.json())
    .then(res => {
      if (res.user) {
        console.log(res)
        this.props.logIn(res.user)
      } else {
        this.setState({err: "Invalid Username or Password"})
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
        <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          margin="normal"
          variant="outlined"
          onChange={(event) => this.setState({email: event.target.value})}
        />
        </div>
         <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          onChange={(event) => this.setState({password: event.target.value})}
        />
        <div>{this.state.err}</div>
        </div>
        <div className="login-box">
        <div className="button">
        <Button onClick={this.logIn} variant="contained" color="primary">Log In</Button>
         </div>
         </div>
         <div className="login-box">
         <div className="box">You can also sign in with:</div>
         <span className="button">
            <Facebook/>
       </span>
       <span> -or- </span>
        <span className="button">
       <Button variant="contained" color="primary">
            Google+
       </Button>
       </span>
        </div>
        <div style={{textAlign: "center", marginTop: "20px"}}><Link to="/registration"><a href="#">Don't Have An Account?</a></Link></div>
        </React.Fragment>
    )
}

}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, {logIn})(LoginForm)

