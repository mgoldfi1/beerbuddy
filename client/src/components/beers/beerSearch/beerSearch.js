import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import StyleSelect from './styleSelect'


export default class BeerSearch extends Component {


  state = {
    styles: [],
    breweries: []
  }

  componentWillMount() {
    fetch('/api/styles/all')
    .then(res => res.json())
    .then(res => this.setState({styles: res.styles, breweries: res.breweries}))

  }

  renderBreweries = () => {
    if (this.state.breweries) {
      return this.state.breweries.map(brewery => {
        return <option key={brewery.id} value={brewery.id}>{brewery.name}</option>
      })
    }
  }

  render() {
    return (
      <Grid>
          <Cell className="beersearch-header" col={12}>
          <h1>Search Beers</h1>
          </Cell>
          <Cell col={12}>
          <div>
          <InputLabel htmlFor="name">Beer Name:</InputLabel>
          </div>
          <div>
          <TextField
          name="name"
          id="outlined-bare"
          margin="normal"
          variant="outlined"
        />
        </div>
        <div className="select-dropdown">
        <InputLabel htmlFor="style-select">Beer Style:</InputLabel>
        <StyleSelect styles={this.state.styles}/>
        </div>
        <div className="select-dropdown"> 
        <InputLabel htmlFor="brewery-select">Brewery Name:</InputLabel>
        <Select
            native
            inputProps={{
              name: 'brewery',
              id: 'brewery-select',
            }}
          >
          <option></option>
      {this.renderBreweries()}
      </Select>
      </div>
      <div className="select-dropdown">
      <InputLabel htmlFor="brewery-select">Above a certain rating:</InputLabel>
        <Select
            native
            inputProps={{
              name: 'rating',
              id: 'rating-select',
            }}
          >
          <option></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
      </Select>
      </div>
          </Cell>
      </Grid>
    )
  }
}
