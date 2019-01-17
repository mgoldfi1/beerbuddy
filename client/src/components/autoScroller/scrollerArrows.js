import React, { Component } from 'react';
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";

class ScrollerArrows extends Component {

  state = {
    direction: ``,
    visibility: ``
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      this.setState({direction: this.setDirection()})
    }
  }

  setDirection = () => {
    if(this.props.scroller > 0){
      return `right`
    } else if (this.props.scroller < 0) {
      return `left`
    } else {
      return ``
    }
  }

  // setVisibility = () => {
  //   if(this.props.counter === 0 && (this.props.scroller > 0 || this.props.scroller < 0)){
  //     return `hide`
  //   } else if (this.props.counter === null && this.props.scroller < 0) {
  //     return 'hide'
  //   } else {
  //     return ``
  //   }
  // }

  concatClassNames = () => {
    return this.props.className + ` ` + this.state.direction + ` ` + this.state.visibility
  }

  render(){
    console.log(this.props.counter)
      return (
          <>
            <TiChevronLeft
            id='arrow-left' className={this.concatClassNames()}
            />
            <TiChevronRight
            id='arrow-right' className={this.concatClassNames()}
            />
          </>
      )
    }
};

export default ScrollerArrows
