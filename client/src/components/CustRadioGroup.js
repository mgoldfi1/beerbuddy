import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FiPercent } from "react-icons/fi";
import { MdStarBorder, MdTitle } from "react-icons/md";
import '../css/form-control.css'

class CustRadioGroup extends Component {

  state = {
    labels: this.props.labels
  }

  mapLabels = () => {
    return this.state.labels.map((label, index) =>
      <FormControlLabel
        key={index}
        value={label.toLowerCase()}
        control={<Radio color="primary" />}
        label={label}
        labelPlacement="bottom"
        style={{margin: '1px', transform: `scale(${this.props.transform})`}}
        />)
  }

  render(){
    return (
        <FormControl className={this.props.className} component="fieldset">
          { this.props.label ?
           <FormLabel  component="legend"><strong>{this.props.label}</strong> </FormLabel>
           : null
         }
           <RadioGroup
           className={this.props.horizontal ? 'horizontal-radio-group' : ''}
           aria-label="position"
           name="position"
           value={this.props.value}
           onChange={this.props.onChange}
           row
           >
          {this.mapLabels()}
         </RadioGroup>
        </FormControl>
    )
  }
}

CustRadioGroup.defaultProps = {
  label: false,
  horizontal: false,
  transform: 1
}

export default CustRadioGroup
