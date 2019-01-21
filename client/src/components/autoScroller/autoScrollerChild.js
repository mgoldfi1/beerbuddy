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
    const linkWidth = event.currentTarget.children[0].children[0].offsetWidth
    const divWidth =  event.currentTarget.offsetWidth
    const center = event.currentTarget.parentElement.offsetWidth/2
    if (this.state.divWidth !== divWidth) {
      this.setState({divWidth: divWidth, center: (center), offset: (linkWidth/2)})
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
    const coord = event.clientX
    const centerRange = [this.state.center - this.state.offset, this.state.center + this.state.offset]
    if (coord < centerRange[1] && coord > centerRange[0]) {
      this.setState({scroller: 0}, this.props.updateScroller(0))
    } else {
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
  speedMod: 0.1
}

export default AutoScrollerChild
