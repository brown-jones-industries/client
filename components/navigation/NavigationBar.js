import React from 'react'
import NavigationButton from './NavigationButton'

function nextTabNum (currentTab, numTabs) {
  if (currentTab >= (numTabs - 1)) {
    return 0
  } else {
    return currentTab + 1
  }
}

export default ({setTab, numTabs, currentTab}) => {
  let tabs = []
  for (let i = 0; i < numTabs; i++) {
    tabs.push(<NavigationButton
      setTab={setTab}
      tabNumber={i}
      buttonType={'test0'}
      key={i} // required by react if you are creating elements in a loop
    />)
  }

  let tabNum = nextTabNum(currentTab, numTabs)

  // <div>
  //   {tabs}
  // </div>
  return (
    <div className='btn-group' role='group' aria-label='Basic example'>
      <button className='btn btn-outline-secondary fa fa-chevron-left' onClick={() => setTab(currentTab - 1)} />
      <button className='btn btn-primary col-sm-12' onClick={() => setTab(tabNum)}>Next</button>
    </div>
  )
}
