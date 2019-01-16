import React, { Component } from 'react';
import '../../css/autoScroller.css'

class AutoScroller extends Component {

  state = {
    center: 0,
    offset: 0,
    scroller: 0,
    counter: 0
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('timeout start')
    setTimeout(() => this.checkCounter(prevState), 500)
}

  checkCounter = (prevState) => {
    if (this.state.counter === prevState.counter && this.state.counter !== 0){
        clearInterval(this.interval)
        this.setState({counter: 0})
        console.log('cleared')
    }
  }


  scrollLogger = (scroller) => {
    scroller.scrollBy(this.state.scroller, 0)
  }

  handleMouseEnter = (event) => {
    let linkWidth = event.currentTarget.children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    let scroller = event.currentTarget
    this.interval = setInterval( () =>  this.scrollLogger(scroller), 50)
    if (this.state.divWidth !== divWidth) {
      this.setState({center: (divWidth/2), offset: (linkWidth)})
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

  handleScroll = (event) => {
    this.setState((prevState) => {
     return { counter: prevState.counter + 1 }
   })
   setTimeout(() => this.setState((prevState) => {
    return { counter: prevState.counter}
  }), 500)
  }

    render() {
      console.log(this.state.counter)
        return (
          <div className='auto-scroller-container'>
          <div className='auto-scroller'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          onScroll={this.handleScroll}
          >
            {this.props.children}
          </div>
          </div>
        )
    }
}

export default AutoScroller
