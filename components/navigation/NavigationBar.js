import React from 'react';
import { connect } from 'react-redux';

import { currentTab } from '../../actions/navigation';
import NavigationButton from './NavigationButton';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.setTab = this.setTab.bind(this);
  }

  setTab(tabNum) {
    this.props.currentTab(tabNum);
  }

  render() {
    return (
      <div>
        <NavigationButton
          setTab={this.setTab}
          tabNumber={0}
          buttonType={'test0'}
        />
        <NavigationButton
          setTab={this.setTab}
          tabNumber={1}
          buttonType={'test1'}
        />
        <NavigationButton
          setTab={this.setTab}
          tabNumber={2}
          buttonType={'test2'}
        />
        <NavigationButton
          setTab={this.setTab}
          tabNumber={3}
          buttonType={'test3'}
        />
      </div>
    );
  }
}


export default connect(({ navigation }) => ({ navigation }), {
  currentTab,
})(NavigationBar);
