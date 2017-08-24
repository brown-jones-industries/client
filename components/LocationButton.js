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
        <div className='row'>
          <div className='col align-self-center'>
            <AnimatedLocationLoader
              height='300'
              width='300'
              hasErrored={this.props.location.locationHasErrored}
              isLoading={this.props.location.locationIsLoading}
              location={this.props.location.location}
            />
          </div>
        </div>

        <div className='row text-center'>
          <div className='btn btn btn-outline-secondary col align-self-center' onClick={this.props.locationFetchLocation}>Get Location</div>
        </div>

        <div className='row text-center'>
          <h3>{locationlabel}</h3>
        </div>
      </div>
    )
  }
}

export default connect(({ location }) => ({ location }), {
  locationFetchLocation
})(LocationButton)
