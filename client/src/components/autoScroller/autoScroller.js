import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  scroller: null,
  scroll: false,
  cleared: false
}

const defaultEnterState = {
  cleared: true
}

class AutoScroller extends Component {

    state = initialState

    handleMouseEnter = (event, divWidth) => {
      let lastEl = event.currentTarget.lastChild
      let totalWidth = lastEl.offsetLeft + lastEl.offsetWidth
      let cleared = totalWidth - divWidth > 0 ? true : false
      if (this.state.cleared || cleared) {
        this.setState(defaultEnterState)
      }
    }

    handleMouseLeave = () => {
      setTimeout(() => this.setState(initialState), 66)
    }

    updateScroller = (scroller) => {
      this.setState({scroller: scroller})
    }

    updateScrollAndOrClear = (scroll) => {
      if (scroll !== this.state.scroll) {
        this.setState({scroll: scroll, cleared: true})
      } else if ( scroll && scroll !== this.state.cleared){

        this.setState({cleared: true})
      }
    }

    render() {
      console.log(this.props.children)
        return (
          <div className='auto-scroller-container'
          onMouseLeave={this.handleMouseLeave}
          >
            <AutoScrollerChild
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
            updateScrollAndOrClear={this.updateScrollAndOrClear}
            updateScroller={this.updateScroller}
            >
              {this.props.children}
            </AutoScrollerChild>
            {this.state.cleared ?
              <ScrollerArrows {...this.state}/> : null
          }
          </div>
        )
    }
}

export default AutoScroller
