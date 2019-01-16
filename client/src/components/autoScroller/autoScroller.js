import React, { Component } from 'react';
import '../../css/autoScroller.css'

class AutoScroller extends Component {

  state = {
    center: 0,
    offset: 0,
    scroller: 0,
    visibility: 'hidden',
    activate: ''
  }

  handleMouseEnter = (event) => {
    let linkWidth = event.currentTarget.children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    let scroller = event.currentTarget
    this.interval = setInterval(() => scroller.scrollBy(this.state.scroller, 0, 'smooth'), 50)
    if (this.state.divWidth !== divWidth) {
      this.setState({center: (divWidth/2), offset: (linkWidth)})
    } else {
    }
  }

  handleMouseLeave = () => {
    clearInterval(this.interval)
  }

  handleMouseMove = (event) => {
    let coord = event.clientX
    let centerRange = [this.state.center - this.state.offset, this.state.center + this.state.offset]
    if (coord <= centerRange[0]){
        this.setState({scroller: (coord - centerRange[0]) * 0.1})
    } else if (coord >= centerRange[1]) {
        this.setState({scroller: (coord - centerRange[1]) * 0.1})
    } else {
      this.setState({scroller: 0})
    }
  }

    render() {
        return (
          <div className='auto-scroller-container'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          >
            {this.props.children}
          </div>
        )
    }
}

export default AutoScroller
