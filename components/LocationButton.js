import React from 'react'
import { connect } from 'react-redux'

import { locationFetchLocation } from '../actions/location'

import AnimatedLocationLoader from './AnimatedLocationLoader'

class LocationButton extends React.Component {
  render () {
    let locationlabel = ''
    if (this.props.location.locationIsLoading) {
      locationlabel = 'Location is loading...'
    } else if (this.props.location.locationHasErrored) {
      locationlabel = 'Failed to retreive location.'
    } else if (this.props.location.location) {
      locationlabel =
        `${this.props.location.location.lat
        } : ${
        this.props.location.location.lon}`
    }
    return (
      <div>
        <button onClick={this.props.locationFetchLocation}>Get Location</button>
        <AnimatedLocationLoader
          height='300'
          width='300'
          hasErrored={this.props.location.locationHasErrored}
          isLoading={this.props.location.locationIsLoading}
          location={this.props.location.location}
        />
        <label>
          {locationlabel}
        </label>
      </div>
    )
  }
}

export default connect(({ location }) => ({ location }), {
  locationFetchLocation
})(LocationButton)
