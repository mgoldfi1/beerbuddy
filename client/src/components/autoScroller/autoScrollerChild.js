import React, { Component } from 'react';
import '../../css/autoScroller.css'


class AutoScrollerChild extends Component {

    state = {
      divWidth: 0,
      center: 0,
      offset: 0,
      scroller: -1,
    }
    scrollerRef = React.createRef(); //provides rendered divs dimensions on mount

  componentDidMount(){
    const divWidth = this.scrollerRef.current.offsetWidth
    const lastEl = this.scrollerRef.current.lastChild
    const totalWidth = lastEl.offsetLeft + lastEl.offsetWidth
    //checks div width based on the ref defined below state. if the last child's width from its starting
    //position within the scroller is greater than the width of the scroller, then
    // the div has overflow and can be scrolled, resulting in cleared === false
    //otherwise the div has enough room for all of its elements resulting in cleared === true
    const cleared = totalWidth - divWidth > 0 ? true : false
    this.props.updateCleared(cleared)
  }

  componentDidUpdate(prevProps) {
    //if props.scroll === true, the div is actively beeing scrolled through
    // Use timeouts to make sure that the div has stopped scrolling, when the div
    //has stopped scrolling, erase the interval
    if (!this.props.scroll && prevProps.scroll !== this.props.scroll){
       setTimeout(() => this.eraseInterval())
    }
}

  componentWillUnmount(){
    //clears any left over intervals or timeOuts that haven't been cleared yet
    clearTimeout(this.intervalId)
    this.eraseInterval()
  }

  handleMouseEnter = (event) => {
    //use the linkwidth to establish an offset in relation to the center
    const linkWidth = event.currentTarget.children[0].children[0].offsetWidth
    // save the divWith so the scroll speed will stay relatively the same as a screen
    //grows and shrinks in size
    const divWidth =  event.currentTarget.offsetWidth
    //use the parent container as a reference for the center point to give the most accurate data
    const center = event.currentTarget.parentElement.offsetWidth/2
    if (this.state.divWidth !== divWidth) {
      //divWith starts at 0 so this will trigger at least one time if entered
      this.setState({divWidth: divWidth, center: (center), offset: (linkWidth/2)})
    }
      this.props.handleMouseEnter()
  }

  handleMouseLeave = () => {
     this.eraseInterval()
     this.props.handleMouseLeave()
  }

    eraseInterval = () => {
      //checks to see if there's an interval
      //if there's an interval clear it and set it equal to undefined
      //we can use this.interval's undefined nature elsewhere in the componenet
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = undefined
      }
    }

    checkOrSetInterval = (event) => {
      const scroller = event.currentTarget
      //sets an interval on scrolling if one does not already exist, accesses the div and
      //scrolls by this.state.scroller's value, negative value scrolls left, positive scrolls right
      if (!this.interval) {
        this.interval = setInterval( () => scroller.scrollBy(this.state.scroller, 0), 30)
      }
    }

    handleStateCallBack = (event) => {
      this.checkOrSetInterval(event)
      this.props.updateScroller(this.state.scroller)
      //sets the interval and updates the parent component's state
    }

  handleMouseMove = (event) => {
    const coord = event.clientX //horizontal mouse coordinate
    const centerRange = [this.state.center - this.state.offset, this.state.center + this.state.offset]
    //creates a center range in which the div will not scroll
    if (coord < centerRange[1] && coord > centerRange[0]) {
      //if the mouse is within that range, do not scroll, set scroller to 0
      this.setState({scroller: 0}, this.props.updateScroller(0))
    } else {
      //if the scroller is outside that zone, use the scrollerSpeed helper method to determine the
      //value
      this.setState({
        scroller: this.scrollerSpeed(coord, this.state.center, this.props.speedMod, this.state.divWidth)},
      this.handleStateCallBack(event))
    }
  }
    scrollerSpeed = (coord, center, speedMod, width) => {
      const scroller = (coord - center) * (speedMod * 1000) / width
      return scroller > 0 ? scroller : scroller * 1.05
    }

  handleScroll = (event) => {
    //updates parents state
    this.props.updateScroll(true)
    //clears the timeOut set in this function if there is one set.
    //when the scroll ends the timeOut will be called soon after, sending the parent
    //componenet the most accurate result
    clearTimeout(this.timeoutID)
    this.timeoutID = setTimeout(() => this.props.updateScroll(false), 66)
  }

    render() {
        return (
        this.props.mobile ?
          <div className='auto-scroller mobile'
          ref={this.scrollerRef}
          >
          {this.props.children}
          </div> :
          <div className='auto-scroller'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          onScroll={this.handleScroll}
          ref={this.scrollerRef}
          >
            {this.props.children}
          </div>
        )
    }
}

AutoScrollerChild.defaultProps = {
  speedMod: 0.1
}

export default AutoScrollerChild
