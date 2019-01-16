import React, { Component } from 'react';
import '../../css/autoScroller.css'

class AutoScroller extends Component {

    render() {
        return (
          <div className='auto-scroller-container'>
            {this.props.children}
          </div>
        )
    }
}

export default AutoScroller
