import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class BeerSorter extends Component {

  state = {
    labels: ['ABV', 'Name', 'Rating', 'Style', 'Brewery'],
  }

  mapLabels = () => {
    return this.state.labels.map(label =>
      <FormControlLabel
        value={label.toLowerCase()}
        control={<Radio color="primary" />}
        label={label}
        labelPlacement="bottom"
        style={{margin: '1px'}}
        />)
  }

  render(){
    return (
      <FormControl component="fieldset">
         <FormLabel  component="legend"><strong>Sort By:</strong></FormLabel>
         <RadioGroup
         aria-label="position"
         name="position"
         value={this.props.value}
         onChange={this.props.handleChange}
         row
         >
        {this.mapLabels()}
     </RadioGroup>
    </FormControl>
    )
  }

}

export default BeerSorter
