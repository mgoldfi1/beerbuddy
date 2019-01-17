import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  className: `scroller-arrows-hidden`,
  scroller: null,
  counter: null
}

const defaultEnterState = {
  className: `scroller-arrows`
}

class AutoScroller extends Component {

    state = initialState

    componentDidUpdate(prevProps, prevState){
      if ((this.state.scroller == 0 || this.state.scroller === null) && this.state.scroller !== prevState.scroller) {
        console.log('here')
        this.setState({counter: null})
      }
    }

    // handleHideArrow = (prevProps, prevState) => {
    //   if (this.state.counter === 0 && this.state.counter !== prevState.counter){
    //     this.setState({className: this.state.className + ` hidden`})
    //   }
    // }
    //
    // handleDirection = (prevProps, prevState) => {
    //   if (this.state.direction !== null && this.state.direction !== prevState.direction) {
    //     this.setState({className: defaultEnterState.className + ` ${this.state.direction}`})
    //   } else if (this.state.direction === null && this.state.direction !== prevState.direction) {
    //       this.setState(defaultEnterState)
    //   }
    // }


    handleMouseEnter = () => {
      // console.log('entered')
      this.setState(defaultEnterState)
    }

    handleMouseLeave = () => {
      // console.log('left')
      this.setState(initialState)
    }

    updateScroller = (scroller) => {
      if (scroller !== this.state.scroller) {
        this.setState({scroller: scroller})
      }
    }

    updateCounter = (counter) => {
      if (counter !== this.state.counter) {
        this.setState({counter: counter})
      }
    }


    render() {
        return (
          <div className='auto-scroller-container'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          >
            <AutoScrollerChild
            updateScroller={this.updateScroller}
            updateCounter={this.updateCounter}

            >
              {this.props.children}
            </AutoScrollerChild>
            <ScrollerArrows {...this.state}/>
          </div>
        )
    }
}

export default AutoScroller
