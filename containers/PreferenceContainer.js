import React from "react";
import { connect } from "react-redux";

import CheapOrFast from '../components/CheapOrFast';
import { setPreferenceCheap, setPreferenceFast } from '../actions/weightedPreference';

class PreferenceContainer extends React.Component {

  render() {
    console.log(this.props);
    return (
      <CheapOrFast
        preference={this.props.weightedPreference}
        setPreferenceFast={this.props.setPreferenceFast} 
        setPreferenceCheap={this.props.setPreferenceCheap} 
      />
    );
  }
}


export default connect(({ weightedPreference }) => ({ weightedPreference }), { setPreferenceCheap, setPreferenceFast })(
  PreferenceContainer,
);
