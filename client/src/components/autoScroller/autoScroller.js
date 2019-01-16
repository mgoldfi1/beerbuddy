import React, { Component } from 'react';
import AutoScrollerChild from './autoScrollerChild'
import '../../css/autoScroller.css'

class AutoScroller extends Component {

    render() {
        return (
          <div className='auto-scroller-container'>
            <AutoScrollerChild>
              {this.props.children}
            </AutoScrollerChild>
          </div>
        )
    }
}

export default AutoScroller
