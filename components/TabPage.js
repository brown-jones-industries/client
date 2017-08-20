import React from 'react'

export default ({ selected, children }) => {
  return (
    <div className={selected ? 'card-body tab-container activated' : 'card-body tab-container '}>
      {children}
    </div>
  )
}
