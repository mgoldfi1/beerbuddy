import React, { Component } from 'react'
import Navbar from '../navbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Icon from '@material-ui/core/Icon';


export default class LoginForm extends Component {

render()  {
    return (
        <React.Fragment>
        <Navbar/>
        <div className="spacer"/>
        <div className="loginBox">
        <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          margin="normal"
          variant="outlined"
        />
        </div>
         <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
        />
        </div>
        <div className="loginBox">
        <div className="button">
        <Button variant="contained" color="primary">Log In</Button>
         </div>
         </div>
         <div className="loginBox">
         <div className="box">You can also sign in with:</div>
         <span className="button">
           <Button variant="contained" color="default">
            Facebook
       </Button>
       </span>
       <span> -or- </span>
        <span className="button">
       <Button variant="contained" color="primary">
            Google+
       </Button>
       </span>
        </div>
        </React.Fragment>
    )
}

}