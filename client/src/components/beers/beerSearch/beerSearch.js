import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



export default class BeerSearch extends Component {

  state = {
    styles: ''
  }

  componentWillMount() {
    fetch('/api/styles/all')
    .then(res => res.json())
    .then(styles => this.setState({styles: styles}))
  }

  renderOptions = () => {
    if (this.state.styles.styles) {
    this.state.styles.styles.map( style => {
      return <option value={1}>hello</option>
    })
    }
  }
  render() {
    {console.log(this.state.styles.styles)}
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
            {this.state.styles.styles[0].name}
          </Select>
          </Cell>
      </Grid>
    )
  }
}
