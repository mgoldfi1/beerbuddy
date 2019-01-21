import React, { Component } from 'react'
import Select from '@material-ui/core/Select';


export default class StyleSelect extends Component {
   

   
   
    renderOptions = () => {
        return this.props.styles.map( style => {
          return <option value={style.name}>{style.name}</option>
        }) 
      }

  render() {
      {console.log(this.props.styles)}
    return (
        <React.Fragment>
             <Select
            native
            inputProps={{
              name: 'style',
              id: 'style-select',
            }}
          >
          <option></option>
      {this.renderOptions()}
      </Select>

        </React.Fragment>
    )
  }
}
