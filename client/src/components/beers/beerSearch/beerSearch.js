import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
export default class BeerSearch extends Component {
  render() {
    return (
      <Grid>
          <Cell className="beersearch-header" col={12}>
          <h1>Search Beers</h1>
          </Cell>
          <Cell col={12}>
          <TextField
          label="Name Of Beer"
          id="outlined-bare"
          margin="normal"
          variant="outlined"
        /><br/>
          <InputLabel htmlFor="brewery-select">Brewery</InputLabel>
          <Select
            native
            inputProps={{
              name: 'brewery',
              id: 'brewery-select',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          </Cell>
      </Grid>
    )
  }
}
