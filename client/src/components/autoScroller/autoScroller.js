import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  scroller: null,
  scroll: false,
  cleared: false,
  entered: false
}

const defaultEnterState = {
  entered: true
}

class AutoScroller extends Component {

    state = initialState

    handleMouseEnter = () => {
      this.setState(defaultEnterState)
    }

    handleMouseLeave = () => {
      setTimeout(() => this.setState({
        scroller: initialState.scroller,
        scroll: initialState.scroll,
        entered: initialState.entered
      }), 66)
    }

    updateScroller = (scroller) => {
      this.setState({scroller: scroller})
    }

    updateScroll = (scroll) => {
      if (scroll !== this.state.scroll) {
        this.setState({scroll: scroll, cleared: true})
      } else if ( scroll && scroll !== this.state.cleared){
        this.setState({cleared: true})
      }
    }

    updateCleared = (cleared) => {
      if(cleared !== this.state.cleared){
        this.setState({cleared: cleared})
      }
    }

    render() {
      console.log('cleared', this.state.cleared)
      console.log('entered', this.state.entered)
        return (
          <div className='auto-scroller-container'
          onMouseLeave={this.handleMouseLeave}
          >
            <AutoScrollerChild
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
            updateScroll={this.updateScroll}
            updateScroller={this.updateScroller}
            updateCleared={this.updateCleared}
            >
              {this.props.children}
            </AutoScrollerChild>
            {this.state.entered && this.state.cleared ?
              <ScrollerArrows {...this.state}/> : null
          }
          </div>
        )
    }
}

export default AutoScroller
