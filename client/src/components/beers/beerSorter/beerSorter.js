import React, { Component } from 'react';
import CustRadioGroup from '../../CustRadioGroup'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import '../../../css/form-control.css'

class BeerSorter extends Component {

  render(){
    return (
      <div className="sort-container">
        <FormControl className="sort-styles" component="fieldset">
          <RadioGroup
          aria-label="position"
          name="position"
          value={this.props.filter}
          onChange={this.props.onChange}
          row
          >
          <FormControlLabel
            value="abv"
            control={<Radio color="primary" />}
            label="ABV"
            labelPlacement="bottom"
            />
          <FormControlLabel
            value="name"
            control={<Radio color="primary" />}
            label="Name"
            labelPlacement="bottom"
            />
          <FormControlLabel
            value="ratingAvg"
            control={<Radio color="primary" />}
            label="Rating"
            labelPlacement="bottom"
            />
          </RadioGroup>
         </FormControl>
        <FormControl component="fieldset">
          <RadioGroup
          className={'horizontal-radio-group'}
          aria-label="position"
          name="position"
          value={this.props.order}
          onChange={this.props.onOrderChange}
          row
          >
          <FormControlLabel
            value={'DESC'}
            control={<Radio icon={<MdArrowUpward/>} checkedIcon={<MdArrowUpward/>} color="primary"/>}
            />
          <FormControlLabel
              value={'ASC'}
              control={<Radio icon={<MdArrowDownward/>} checkedIcon={<MdArrowDownward/>} color="primary"/>}
              />
         </RadioGroup>
       </FormControl>
      </div>
    )
  }

}

export default BeerSorter
