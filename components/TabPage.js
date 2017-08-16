import React from 'react'

export default ({ selected, children }) => {
  return (
    <div className={selected ? 'tab-container activated' : 'tab-container '}>
      {children}
    </div>
  )
}
