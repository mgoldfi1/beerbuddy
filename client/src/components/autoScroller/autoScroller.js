import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  scroller: null,
  scroll: false,
  clear: false
}

const defaultEnterState = {
  clear: true
}

class AutoScroller extends Component {

    state = initialState

    handleMouseEnter = (event, divWidth) => {
      // let lastEl = event.currentTarget.lastChild
      // let totalWidth = lastEl.offsetLeft + lastEl.offsetWidth
      // console.log('total width', totalWidth, 'div width', divWidth)
      // let clear = totalWidth - divWidth > 0 ? true : false
      // console.log(clear)
      // if (this.state.clear || clear) {
        this.setState(defaultEnterState)
      // }
    }

    handleMouseLeave = () => {
      clearTimeout(this.timeoutID)
      this.timeoutID = setTimeout(() => this.setState(initialState), 66)
    }

    updateScroller = (scroller) => {
      this.setState({scroller: scroller})
    }

    updateScroll = (scroll) => {
      if (scroll !== this.state.scroll) {
        this.setState({scroll: scroll})
      }
    }

    render() {
      console.log('container scroll value', this.state.scroll)
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
