import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class BrewerySearchBar extends Component {

  componentWillMount(){
      document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    var key = event.which || event.keyCode;
    if (key === 13) {
      this.props.handleSearch()
    }
  }

  render(){
    return (
      <>
      <TextField
          id="outlined-email-input"
          label="Zipcode or Address"
          type="text"
          name="address"
          margin="normal"
          variant="outlined"
          style={{height: 40, margin: 7}}
          onChange={this.props.handleChange}
      />
      <Button variant="contained" onClick={this.props.handleSearch}style={{marginTop: 8}}color="primary">
          Find Breweries
      </Button>
      </>
    )
  }
}

export default BrewerySearchBar
