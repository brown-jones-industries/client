import React from 'react'
import { connect } from 'react-redux'
import GoeeyRadio from './GoeeyRadio'
import NewAnimatedPiggy from './NewAnimatedPiggy'
import AnimatedRocket from './AnimatedRocket'

import RadioContainer from './RadioContainer'
import HiddenComponent from './HiddenComponent'

export default ({ preference, setPreferenceCheap, setPreferenceFast }) =>
  (
    <div>
      <HiddenComponent hidden={preference !== 'cheap'}>
        <NewAnimatedPiggy height='400px' width='400px' />
      </HiddenComponent>
      <HiddenComponent hidden={preference !== 'fast'}>
        <AnimatedRocket height='400px' width='400px' />
      </HiddenComponent>
      <RadioContainer
        height='100'
        width='100'
        selected={preference === 'cheap'}
        clicked={setPreferenceCheap}
        label={'Cheap'}
        />
      <RadioContainer
        height='100'
        width='100'
        selected={preference === 'fast'}
        clicked={setPreferenceFast}
        label={'Fast'}
        />
    </div>

  )
