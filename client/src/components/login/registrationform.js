import React, { Component } from 'react'
import Navbar from '../navbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../App.css';
import Icon from '@material-ui/core/Icon';


export default class RegistrationForm extends Component {

constructor(props) {
    super(props);
    
    this.state = {
        email: '',
        username: '',
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
}


render()  {
    return (
        <React.Fragment>
        <Navbar/>
        <div className="spacer"/>
        <div className="loginBox">
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
        <TextField
          onChange={(event) => this.setState({username: event.target.value})}
          required
          id="outlined-required"
          label="Username"
          margin="normal"
          variant="outlined"
        />
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
        </div>
        </div>
        <div className="loginBox">
        <div className="button">
        <Button variant="contained" color="primary" onClick={this.registration}>Sign Up</Button>
         </div>
         </div>
        </React.Fragment>
    )
}

}