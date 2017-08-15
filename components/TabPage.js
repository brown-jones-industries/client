import React from "react";
import { connect } from "react-redux";


class TabPage extends React.Component {

    constructor(props){
      super(props);

    };


  render() {
    const tabActivated = (this.props.navigation.currentTab == this.props.tabID ? 'activated' : '');
    return (
      <div className={'tab-container section ' + tabActivated}>
        {this.props.children}
      </div>
    );
  }
}

export default connect(({ navigation }) => ({ navigation }), {

})(TabPage);
