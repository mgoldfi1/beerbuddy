import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  className: `scroller-arrows-hidden`,
  scroller: null,
  counter: null
}

const defaultEnterState = {
  className: `scroller-arrows`
}

class AutoScroller extends Component {

    state = initialState

    handleMouseEnter = () => {
      this.setState(defaultEnterState)
    }

    handleMouseLeave = () => {
      this.setState(initialState)
    }

    updateScroller = (scroller) => {
      if (scroller !== this.state.scroller) {
        this.setState({scroller: scroller})
      }
    }

    render() {
        return (
          <div className='auto-scroller-container'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          >
            <AutoScrollerChild
            updateScroller={this.updateScroller}
            >
              {this.props.children}
            </AutoScrollerChild>
            <ScrollerArrows {...this.state}/>
          </div>
        )
    }
}

export default AutoScroller
