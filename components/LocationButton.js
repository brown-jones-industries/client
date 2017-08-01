import React from 'react';
import { connect } from 'react-redux';

import { locationFetchLocation } from '../actions/location';

class LocationButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.locationFetchLocation}>Get Location</button>
        );
    }
}


export default connect(() => ({}), { locationFetchLocation })(
    LocationButton
);
