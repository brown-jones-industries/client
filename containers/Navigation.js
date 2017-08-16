import React from 'react'
import { connect } from 'react-redux'
import TabPage from '../components/TabPage'
import PreferenceContainer from './PreferenceContainer'
import LocationButton from '../components/LocationButton'
import NumberOfPeople from './NumberOfPeople'
import NavigationBar from '../components/navigation/NavigationBar'

import { setTab } from '../actions/navigation'

class Navigation extends React.Component {
  render () {
    let tabs = []
    tabs.push(<PreferenceContainer />)
    tabs.push(<LocationButton />)
    tabs.push(<NumberOfPeople />)

    let that = this

    return (
      <div>
        {tabs.map(function (tabContent, index) {
          return (
            <TabPage key={index} selected={that.props.navigation.currentTab === index}>
              {tabContent}
            </TabPage>
          )
        })}
        <div>
          <NavigationBar setTab={this.props.setTab} numTabs={tabs.length} />
        </div>
      </div>
    )
  }
 }
export default connect(({ navigation }) => ({ navigation }), {
  setTab
})(Navigation)
