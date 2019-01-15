import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const selectChoices = [1,2,3,4,5]


export default class RatingSelect extends Component {
    state = {
        value: ''
    }
    

    render() {
        {console.log(this.state.value)}
        return (
            <div>
            <strong> Leave a rating for this beer: </strong>
            <br/>
            <TextField
            id="outlined-select-currency-native"
            select
            value={this.state.value}
            margin="normal"
            variant="outlined"
            onChange={(event) => {this.setState({value: event.target.value})}}
          >
            {selectChoices.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <div>
          <Button  variant="contained" color="primary" size="small">
          Go
          </Button>
          </div>
          </div>
        )
    }
}