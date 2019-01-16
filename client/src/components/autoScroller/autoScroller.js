import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  className: 'scroller-arrows-hidden'
}

class AutoScroller extends Component {

    state = initialState

    handleMouseEnter = () => {
      this.setState({className: 'scroller-arrows'})
    }

    handleMouseLeave = () => {
      this.setState(initialState)
    }


    render() {
        return (
          <div className='auto-scroller-container'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          >
            <AutoScrollerChild>
              {this.props.children}
            </AutoScrollerChild>
            <ScrollerArrows className={this.state.className}/>
          </div>
        )
    }
}

export default AutoScroller
