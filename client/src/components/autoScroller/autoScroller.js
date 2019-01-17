import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  className: `scroller-arrows-hidden`,
  scroller: null,
  scroll: false,
  clear: null
}

const defaultEnterState = {
  className: `scroller-arrows`
}

class AutoScroller extends Component {

    state = initialState

    handleMouseEnter = (event, divWidth) => {
      let lastEl = event.currentTarget.lastChild
      let totalWidth = lastEl.offsetLeft + lastEl.offsetWidth
      console.log('total width', totalWidth, 'div width', divWidth)
      let clear = totalWidth - divWidth > 0 ? true : false
      console.log(clear)
      if (this.state.clear ) {
        this.setState(defaultEnterState)
      }
    }

    handleMouseLeave = () => {
      this.setState(initialState)
    }

    updateScroller = (scroller) => {
      if (scroller !== this.state.scroller) {
        this.setState({scroller: scroller})
      }
    }

    updateScroll = (scroll) => {
      if (scroll !== this.state.scroll) {
        this.setState({scroll: scroll})
      }
    }

    render() {
        return (
          <div className='auto-scroller-container'>
            <AutoScrollerChild
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
            updateScroll={this.updateScroll}
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
