import React from 'react'
import { connect } from 'react-redux'

import { locationFetchLocation } from '../actions/location'
import BackgroundBubble from './BackgroundBubble'

class Background extends React.Component {
  constructor (props) {
    super(props)

    this.clicks = 0
  };
  render () {
    return (
      <div className='container'>
        <div id='background-container' className='hero is-fullheight '>
          <div className='hero-body'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({ location }) => ({ location }), {
  locationFetchLocation
})(Background)
