import React from 'react'

class HiddenComponent extends React.Component {
  render () {
    return (
      <div className={this.props.hidden ? 'hidden' : ''}>
        {this.props.children}
      </div>
    )
  }
 }
export default HiddenComponent
