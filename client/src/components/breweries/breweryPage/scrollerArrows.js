import React, { Component } from 'react';
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

class ScrollerArrows extends Component {



render(){
    return (
        <>
          <TiChevronLeftOutline
          style={{visibility: this.props.visibility, color: this.props.activate === 'left' ? 'green' : null }}
          id='arrow-left' className='scroller-arrows'/>
          <TiChevronRightOutline style={{visibility: this.props.visibility, color: this.props.activate === 'right' ? 'green' : null}}
          id='arrow-right' className='scroller-arrows'/>
        </>
    )
  }
};

export default ScrollerArrows
