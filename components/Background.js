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
      <div id='background-container'>
        {this.props.children}
      </div>
    )
  }
}

export default connect(({ location }) => ({ location }), {
  locationFetchLocation
})(Background)
