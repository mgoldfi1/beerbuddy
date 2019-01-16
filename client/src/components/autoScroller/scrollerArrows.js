import React, { Component } from 'react';
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";

class ScrollerArrows extends Component {

  render(){
      return (
          <>
            <TiChevronLeft
            id='arrow-left' className={this.props.className}
            />
            <TiChevronRight
            id='arrow-right' className={this.props.className}
            />
          </>
      )
    }
};

export default ScrollerArrows
