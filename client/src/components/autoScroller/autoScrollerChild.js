import React, { Component } from 'react';
import '../../css/autoScroller.css'


class AutoScrollerChild extends Component {

  state = {
    center: 0,
    offset: 0,
    scroller: 0,
    counter: 0
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => this.checkCounter(prevState), 200)
}

    checkCounter = (prevState) => {
      if (this.state.counter === prevState.counter && this.state.counter !== 0){
          this.eraseInterval()
      }
    }

  handleMouseEnter = (event) => {
    let linkWidth = event.currentTarget.children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    if (this.state.divWidth !== divWidth) {
      this.setState({center: (divWidth/2), offset: (linkWidth)})
    }
  }

  handleMouseLeave = () => {
     this.eraseInterval()
  }

    eraseInterval = () => {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = undefined
        console.log('cleared interval')
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
    this.setState((prevState) => {
       return { counter: prevState.counter + 1 }
    })
    setTimeout(() => this.setState((prevState) => {
        return { counter: prevState.counter }
      }), 50)
  }

    render() {
      console.log('counter', this.state.counter)
      console.log('interval', this.interval)
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
