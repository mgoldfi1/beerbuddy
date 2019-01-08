import React, { Component } from 'react'
import Navbar from '../navbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Icon from '@material-ui/core/Icon';


export default class RegistrationForm extends Component {

render()  {
    return (
        <React.Fragment>
        <Navbar/>
        <div className="spacer"/>
        <div className="loginBox">
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
        />
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
        <div>
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          type="password"
          margin="normal"
          variant="outlined"
        />
        </div>
        </div>
        <div className="loginBox">
        <div className="button">
        <Button variant="contained" color="primary">Sign Up</Button>
         </div>
         </div>
        </React.Fragment>
    )
}

}