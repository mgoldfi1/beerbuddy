import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  className: `scroller-arrows-hidden`,
  direction: null
}

class AutoScroller extends Component {

    state = initialState

    handleMouseEnter = () => {
      this.setState({className: `scroller-arrows`})
    }

    handleMouseLeave = () => {
      this.setState(initialState)
    }

    updateDirection = (direction) => {
      if (direction !== this.state.direction) {
        this.setState({direction: direction})
      }
    }


    render() {
        console.log(this.state.direction)
        return (
          <div className='auto-scroller-container'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          >
            <AutoScrollerChild updateDirection={this.updateDirection}>
              {this.props.children}
            </AutoScrollerChild>
            <ScrollerArrows className={this.state.className}/>
          </div>
        )
    }
}

export default AutoScroller
