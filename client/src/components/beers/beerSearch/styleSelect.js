import React, { Component } from 'react'
import Select from '@material-ui/core/Select';


export default class StyleSelect extends Component {
   

   
   
    renderOptions = () => {
        return this.props.styles.map( style => {
          return <option key={style.id} value={style.name}>{style.name}</option>
        }) 
      }

  render() {
    return (
        <React.Fragment>
             <Select
            native
            inputProps={{
              name: 'style',
              id: 'style-select',
            }}
            onChange={this.props.onChange}
          >
          <option></option>
      {this.renderOptions()}
      </Select>

        </React.Fragment>
    )
  }
}
