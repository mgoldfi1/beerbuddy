import React, { Component } from 'react';
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

class ScrollerArrows extends Component {

  render(){
      return (
          <>
            <TiChevronLeftOutline
            id='arrow-left' className='scroller-arrows'/>
            <TiChevronRightOutline
            id='arrow-right' className='scroller-arrows'/>
          </>
      )
    }
};

export default ScrollerArrows
