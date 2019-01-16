import React, { Component } from 'react';
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

class ScrollerArrows extends Component {

  render(){
    console.log(this.props.className)
      return (
          <>
            <TiChevronLeftOutline
            id='arrow-left' className={this.props.className}/>
            <TiChevronRightOutline
            id='arrow-right' className={this.props.className}/>
          </>
      )
    }
};

export default ScrollerArrows
