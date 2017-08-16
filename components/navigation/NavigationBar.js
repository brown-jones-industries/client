import React from 'react'
import NavigationButton from './NavigationButton'

export default ({setTab, numTabs}) => {
  let tabs = []
  for (let i = 0; i < numTabs; i++) {
    tabs.push(<NavigationButton
      setTab={setTab}
      tabNumber={i}
      buttonType={'test0'}
      key={i} // required by react if you are creating elements in a loop
    />)
  }

  return (
    <div>
      {tabs}
    </div>
  )
}
