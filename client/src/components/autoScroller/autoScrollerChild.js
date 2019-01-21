import React, { Component } from 'react';
import '../../css/autoScroller.css'


class AutoScrollerChild extends Component {

    state = {
      divWidth: 0,
      center: 0,
      offset: 0,
      scroller: 0,
      counter: 0,
      scroll: false,
    }
    scrollerRef = React.createRef();

  componentDidMount(){
    const divWidth = this.scrollerRef.current.offsetWidth
    const lastEl = this.scrollerRef.current.lastChild
    const totalWidth = lastEl.offsetLeft + lastEl.offsetWidth
    let cleared = totalWidth - divWidth > 0 ? true : false
    this.props.updateCleared(cleared)
  }

  componentDidUpdate(prevProps, prevState) {
    clearTimeout(this.intervalId)
    if (!this.state.scroll && prevState.scroll !== this.state.scroll){
       this.intervalId = setTimeout(() => this.eraseInterval())
    }
}

  componentWillUnmount(){
    clearTimeout(this.intervalId)
    this.eraseInterval()
  }

  handleMouseEnter = (event) => {
    let linkWidth = event.currentTarget.children[0].children[0].offsetWidth
    let divWidth =  event.currentTarget.offsetWidth
    if (this.state.divWidth !== divWidth) {
      this.setState({divWidth: divWidth, center: (divWidth/2), offset: (linkWidth/2)})
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
    console.log(this.state.offset)
    let centerRange = [this.state.center - this.state.offset, this.state.center + this.state.offset]
    // debugger;
    if (coord <= centerRange[0]){
        this.setState({scroller: this.scrollerSpeed(coord, centerRange[0], this.props.speed, this.state.divWidth)},
        this.handleStateCallBack(event))
    } else if (coord >= centerRange[1]) {
        this.setState({scroller: this.scrollerSpeed(coord, centerRange[1], this.props.speed, this.state.divWidth)},
        this.handleStateCallBack(event))
    } else {
      this.setState({scroller: 0}, this.props.updateScroller(0))
    }
  }

    scrollerSpeed = (coord, endPoint, speedMod, width) => {
      return (coord - endPoint) * (speedMod * 1000) / width
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
          ref={this.scrollerRef}
          >
            {this.props.children}
          </div>
        )
    }
}

AutoScrollerChild.defaultProps = {
  speed: 0.1
}

export default AutoScrollerChild
