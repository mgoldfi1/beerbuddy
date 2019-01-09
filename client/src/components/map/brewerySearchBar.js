import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const BrewerySearchBar = (props) => {

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
          onChange={props.handleChange}
      />
      <Button variant="contained" onClick={props.handleSearch}style={{marginTop: 8}}color="primary">
          Find Breweries
      </Button>
      </>
    )
}

export default BrewerySearchBar
