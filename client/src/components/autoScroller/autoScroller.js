import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  className: `scroller-arrows-hidden`,
  direction: null
}

const defaultEnterState = {
  className: `scroller-arrows`
}

class AutoScroller extends Component {

    state = initialState

    componentDidUpdate(prevProps, prevState){
      if (this.state.direction !== null && this.state.direction !== prevState.direction) {
        this.setState({className: defaultEnterState.className + ` ${this.state.direction}`})
      }
    }

    handleMouseEnter = () => {
      this.setState(defaultEnterState)
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
