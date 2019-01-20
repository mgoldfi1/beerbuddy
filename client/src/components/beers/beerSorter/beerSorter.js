import React, { Component } from 'react';
import CustRadioGroup from '../../CustRadioGroup'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";


class BeerSorter extends Component {

  render(){
    console.log(this.props.onSortChange)
    return (
      <div className="sort-container">
        <CustRadioGroup
        className="sort-styles"
        labels={['ABV', 'Name', 'Rating']}
        onChange={this.props.onChange}
        value={this.props.value}
        />
        <FormControl component="fieldset">
          <RadioGroup
          className={'horizontal-radio-group'}
          aria-label="position"
          name="position"
          value={this.props.sortValue}
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
