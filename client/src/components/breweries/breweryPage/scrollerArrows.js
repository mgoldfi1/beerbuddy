import React, { Component } from 'react';
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

class ScrollerArrows extends Component {



render(){
    return (
        <>
          <TiChevronLeftOutline
          style={{visibility: this.props.visibility, transform: this.props.activate === 'left' ? 'scale(1.2)' : null }}
          id='arrow-left' className='scroller-arrows'/>
          <TiChevronRightOutline style={{visibility: this.props.visibility, transform: this.props.activate === 'right' ? 'scale(1.2)' : null}}
          id='arrow-right' className='scroller-arrows'/>
        </>
    )
  }
};

export default ScrollerArrows
