import React from "react";
import { connect } from "react-redux";

import PeopleControls from '../components/PeopleControls';
import { increasePeople, decreasePeople } from '../actions/people';

class NumberOfPeopleContainer extends React.Component {

  render() {
    console.log(this.props);
    return (
      <PeopleControls
        numPeople={this.props.people}
        decreasePeople={this.props.decreasePeople} 
        increasePeople={this.props.increasePeople} 
      />
    );
  }
}


export default connect(({people}) => ({people}), { increasePeople, decreasePeople })(
  NumberOfPeopleContainer,
);
