import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import StyleSelect from './styleSelect'


export default class BeerSearch extends Component {


  state = {
    styles: []
  }

  componentWillMount() {
    fetch('/api/styles/all')
    .then(res => res.json())
    .then(styles => this.setState({styles: styles.styles}))
  }

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
          <InputLabel htmlFor="style-select">Beer Style</InputLabel>
        <StyleSelect styles={this.state.styles}/> 
          </Cell>
      </Grid>
    )
  }
}
