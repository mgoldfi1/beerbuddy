import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import ScrollerArrows from './scrollerArrows'
import '../../css/autoScroller.css'

const initialState =  {
  scroller: null,
  scroll: false,
  entered: false,
}

class AutoScroller extends Component {

    state = {...initialState,
      cleared: null,
      direction: 'left',
      mobile: null
    }

    componentDidMount(){
      this.checkDimensions()
      window.addEventListener('resize', this.checkDimensions)
    }

    componentWillUnmount(){
      window.removeEventListener('resize', this.checkDimensions)
    }

    checkDimensions = () => {
      if( window.innerWidth < 1050  ) {
        this.setState({mobile: true})
      } else {
        this.setState({mobile: false})
      }
    }

    handleMouseEnter = () => {
      this.setState({entered: true})
    }

    handleMouseLeave = () => {
      setTimeout(() => this.setState({...initialState}), 66)
    }

    updateScroller = (scroller) => {
      this.setState({scroller: scroller})
    }

    updateScroll = (scroll) => {
      if (scroll) {
        this.setState({scroll: scroll})
      } else if (scroll !== this.state.scroll) {
        this.setState({scroll: scroll})
      }
    }

    updateDirection = (scrollRef, scrollLeft) => {
      if (scrollRef > scrollLeft) {
        this.setState({direction: 'right'})
      } else if(scrollRef < scrollLeft) {
        this.setState({direction: 'left'})
      } else {
        this.setState({direction: ''})
      }
    }

    updateCleared = (cleared) => {
      if(cleared !== this.state.cleared){
        this.setState({cleared: cleared})
      }
    }

    render() {
      console.log(this.state.direction, this.state.scroll)
        return (
          <div className='auto-scroller-container'
          onMouseLeave={this.handleMouseLeave}
          >
            <AutoScrollerChild
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
            updateScroll={this.updateScroll}
            updateDirection={this.updateDirection}
            updateScroller={this.updateScroller}
            updateCleared={this.updateCleared}
            speed={this.props.speed}
            mobile={this.state.mobile}
            >
              {this.props.children}
            </AutoScrollerChild>
            {this.state.cleared && this.state.entered ?
              <ScrollerArrows {...this.state}/> : null
          }
          </div>
        )
    }
}

export default AutoScroller
