import React, { Component } from 'react';
import '../../css/autoScroller.css'


class AutoScrollerChild extends Component {

  state = {
    center: 0,
    offset: 0,
    scroller: 0,
    counter: 0,
    scroll: false
  }

  componentDidUpdate(prevProps, prevState) {
    clearTimeout(this.intervalId)
    if (!this.state.scroll && prevState.scroll !== this.state.scroll){
       this.intervalId = setTimeout(() => this.eraseInterval())
    }
}

  handleMouseEnter = (event) => {
    let linkWidth = event.currentTarget.children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    if (this.state.divWidth !== divWidth) {
      this.setState({center: (divWidth/2), offset: (linkWidth/2)})
    }
      this.props.handleMouseEnter(event, divWidth)
  }

  handleMouseLeave = () => {
     this.eraseInterval()
     this.props.handleMouseLeave()
  }

    eraseInterval = () => {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = undefined
        // console.log('cleared interval')
      }
    }

    checkOrSetInterval = (event) => {
      let scroller = event.currentTarget
      if (!this.interval) {
        this.interval = setInterval( () => scroller.scrollBy(this.state.scroller, 0), 30)
      }
    }

    handleStateCallBack = (event) => {
      this.checkOrSetInterval(event)
      this.props.updateScroller(this.state.scroller)
    }

  handleMouseMove = (event) => {
    let coord = event.clientX
    let centerRange = [this.state.center - this.state.offset, this.state.center + this.state.offset]
    if (coord <= centerRange[0]){
        this.setState({scroller: (coord - centerRange[0]) * 0.1}, this.handleStateCallBack(event))
    } else if (coord >= centerRange[1]) {
        this.setState({scroller: (coord - centerRange[1]) * 0.1}, this.handleStateCallBack(event))
    } else {
      this.setState({scroller: 0}, this.props.updateScroller(0))
    }
  }

  handleScroll = (event) => {
    if (this.state.scroll === false){
        this.setState({scroll: true})
    }
    this.props.updateScroll(true)
    clearTimeout(this.timeoutID)
    this.timeoutID = setTimeout(() => this.setState((prevState) => {
        return { scroll: false }
      }, () => this.props.updateScroll(false)), 66)
  }

    render() {
        return (
          <div className='auto-scroller'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          onScroll={this.handleScroll}
          >
            {this.props.children}
          </div>
        )
    }
}

export default AutoScrollerChild
